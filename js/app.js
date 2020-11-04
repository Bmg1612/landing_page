// Global variables
const navBar = document.querySelector("#navbar__list");
const banner = document.querySelector(".banner__hero");
const sections = document.getElementsByTagName("section");
const button = document.querySelector("#banner__button");
const footer = document.querySelector(".page__footer");
const fragment = document.createDocumentFragment();


// Function that creates dynamically the NavBar
function createNavBar (event) {
    for (let section of sections) {
        let newElement = document.createElement('li');
        newElement.innerHTML = `<a class="menu__link" id="menu__${section.id}" href="#${section.id}"> ${section.dataset.nav}</a>`;
        fragment.appendChild(newElement);
    }
    navBar.appendChild(fragment);    
}        
createNavBar()

//Variables made with the navbar
const menuLink = document.querySelectorAll(".menu__link");
const navList = document.querySelector('.navbar__menu');

// Showing the sections content only when the linked Nav button is clicked
function showSection () {
    navList.addEventListener('click', function showContent (event) {
        event.preventDefault();
        for (let section of sections) {
            section.style.display = "none";
            let currentSelection = event.target.id;
            let sectionNumber = currentSelection.slice(-1);
            let element = document.querySelector('#section'+sectionNumber);
            element.style.display = "block";
            //Add border only when a section is shown
            footer.setAttribute('style', 'border-top: 2px inset #ccc;');
            element.scrollIntoView({behavior: "smooth"});
        }  
    })
}    
showSection();

// Highlights the clicked menu item. Initially no item is highlighted
function activeItem (){
    for (let item of menuLink) {
        item.addEventListener('click', function (event) {
            let current = event.target.id;
            current.className += " active";
            let oldItem = document.querySelectorAll(".active");
            for (let element of oldItem) {
            element.classList.remove("active");
            }
            let newActive = document.getElementById(current);
            newActive.className += " active"; 
        })
    }
}
activeItem();

// Helper function to see if an element is on the viewport
function isInViewport(element) {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight) &&
        bounding.right <= (window.innerWidth)
    );
};

/*
If the banner's button is on the viewport, no menu item is highlighted
But if the user scrolls back to the section it gets highlighted again 
*/ 
window.addEventListener('scroll', function highlightViewport() {
    let activeItem = document.querySelector(".active");
    activeItem.style.backgroundColor = isInViewport(button) ? "#ffc85a" : "";
})

// Function to display the menu list on Mobile & Tablet layouts    
// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
function toggleMenu(menu) {
    // Menu animation
    menu.classList.toggle("change");
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {navBar.style.display = "block"}
}