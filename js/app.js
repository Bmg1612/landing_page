// Global variables
const sections = document.getElementsByTagName("section");

// Function that creates dynamically the NavBar
createNavBar = (event) => {
    const navBar = document.querySelector("#navbar__list");
    const fragment = document.createDocumentFragment();

    for (let section of sections) {
        let newElement = document.createElement('li');
        newElement.innerHTML = `<a class="menu__link" id="menu__${section.id}" href="#${section.id}"> ${section.dataset.nav}</a>`;
        fragment.appendChild(newElement);
    }
    navBar.appendChild(fragment);    
}        
createNavBar()

//Variables made with the navbar

// Showing the sections content only when the linked Nav button is clicked
showSection = () => {
    const navList = document.querySelector('.navbar__menu');
    const footer = document.querySelector(".page__footer");

    navList.addEventListener('click', showContent = (event) => {
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
activeItem = () => {
    const menuLink = document.querySelectorAll(".menu__link");

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

/*
If the banner's motives list is on the viewport, no menu item is highlighted
But if the user scrolls back to the section it gets highlighted again 
*/ 
observingEvent = () => {
    const bannerMotives = document.querySelector(".motives__list__banner");

    let options = {
        root: document.querySelector("#viewport"), //default
        rootMargin: "0px", //default
        threshold: 1.0
    };
    
    let callback = (entries) => {
        let activeItem = document.querySelector(".active");
        entries.forEach((entry) => {
            activeItem.style.backgroundColor = entry.isIntersecting ? "#ffc85a" : "";
        });
    };
    
    let observer = new IntersectionObserver(callback, options);
    observer.observe(bannerMotives);  
}
observingEvent();


// Function to display the menu list on Mobile & Tablet layouts    
// Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon
toggleMenu = (menu) => {
    // Menu animation
    menu.classList.toggle("change");
    if (navBar.style.display === "block") {
        navBar.style.display = "none";
    } else {navBar.style.display = "block"}
}
