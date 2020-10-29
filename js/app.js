/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// const navBar = document.querySelector("#navbar__list");
const pageMain = document.querySelector(".page__main");
const sections = document.getElementsByTagName("section");
const fragment = document.createDocumentFragment();
const navBar = document.querySelector("#navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function createNavBar () {
for (section of sections) {
    const newElement = document.createElement('li');
    newElement.innerHTML = `<a class="menu__link "href="#${section.id}"> ${section.dataset.nav}</a>`;
    fragment.appendChild(newElement);
}

    navBar.appendChild(fragment);
}

// build the nav
createNavBar();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
