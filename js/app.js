// Global variables
const sections = document.getElementsByTagName("section");
const fragment = document.createDocumentFragment();
const navBar = document.querySelector("#navbar__list");
const button = document.querySelector("#buttonContent");
const footer = document.querySelector(".page__footer");

// Function that creates dynamically the NavBar
function createNavBar (event) {
    for (section of sections) {
        const newElement = document.createElement('li');
        if (section.id == "section1") {
            newElement.innerHTML = `<a class="active menu__link" id="menu__${section.id}" href="#${section.id}"> ${section.dataset.nav}</a>`;
            fragment.appendChild(newElement);
        } else {
            newElement.innerHTML = `<a class="menu__link" id="menu__${section.id}" href="#${section.id}"> ${section.dataset.nav}</a>`;
            fragment.appendChild(newElement);
        }    
    }
        navBar.appendChild(fragment);
        
}
    
// Calling the function    
createNavBar();

// Showing the sections content only when the linked Nav button is clicked
const menuLink = document.querySelectorAll(".menu__link");
const navList = document.querySelector('.navbar__menu');

function showSection () {
    navList.addEventListener('click', function showContent (event) {
        for (section of sections) {
            section.style.display = "none";
            let currentSelection = event.target.id;
            let sectionNumber = currentSelection.slice(-1);
            let element = document.querySelector('#section'+sectionNumber);
            element.style.display = "block";
            //Add border onlu when a section is shown
            footer.setAttribute('style', 'border-top: 2px inset #ccc;');
        }  
    })
}    
showSection();

// Highlights the clicked item. Initially no item is highlighted
function activeItem (){
    const initialActive = document.querySelector(".active");
    initialActive.classList.remove("active");

    for (item of menuLink) {
        item.addEventListener('click', function (event) {
            initialActive.className += " active";
            let oldItem = document.querySelectorAll(".active");
            for (element of oldItem) {
            element.classList.remove("active");
            }
            let current = event.target.id;
            let newActive = document.getElementById(current);
            newActive.className += " active";
            
        })
    }
}

activeItem();
// Function to display the menu list on Mobile & Tablet layouts    
// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function toggleMenu() {
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {navBar.style.display = "block"}
} 

// If the button 'More info here' is clicked, all the content appears.
button.addEventListener ('click', function () {
    for (section of sections) {
        section.style.display = 'block';
        footer.setAttribute('style', 'border-top: 2px inset #ccc;');
        // And no menu item is highlighted
        let oldItem = document.querySelectorAll(".active");
            for (element of oldItem) {
            element.classList.remove("active");
            }
    }
})

