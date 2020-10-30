// Global variables
const sections = document.getElementsByTagName("section");
const fragment = document.createDocumentFragment();
const navBar = document.querySelector("#navbar__list");
const button = document.querySelector("#buttonContent");

// Function that creates dynamically the NavBar
function createNavBar () {
    for (section of sections) {
        const newElement = document.createElement('li');
        newElement.innerHTML = `<a class="menu__link" id="menu__${section.id}" href="#${section.id}"> ${section.dataset.nav}</a>`;
        fragment.appendChild(newElement);
    }
        navBar.appendChild(fragment);
        
}
    
// Calling the function    
createNavBar();

// Showing the sections content only when the linked Nav button is clicked
const menuLink = document.querySelectorAll(".menu__link");
const navList = document.querySelector('.navbar__menu');

navList.addEventListener('click', function showContent (event) {
    let currentSelection = event.target.id;
    let sectionNumber = currentSelection.slice(-1);
    let element = document.querySelector('#section'+sectionNumber);
    element.style.display = "block";
    })   

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
    }
})

