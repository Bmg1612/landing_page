const sections = document.getElementsByTagName("section");
const fragment = document.createDocumentFragment();
const navBar = document.querySelector("#navbar__list");

function createNavBar () {
    for (section of sections) {
        const newElement = document.createElement('li');
        newElement.innerHTML = `<a class="menu__link" id="menu__${section.id}" href="#${section.id}"> ${section.dataset.nav}</a>`;
        fragment.appendChild(newElement);
    }
        navBar.appendChild(fragment);
        
    }
    
    
createNavBar();

const menuLink = document.querySelectorAll(".menu__link");
const firstSection = document.querySelector('#section1');
const secondSection = document.querySelector('#section2');
const thirdSection = document.querySelector('#section3');
const fourthSection = document.querySelector('#section4');

for (item of menuLink) {
    item.addEventListener("click", function showContent (event) {
        if (event.target.id === "menu__section1") {
            firstSection.style.display = "block"; } 
        if (event.target.id === "menu__section2") {
            secondSection.style.display = "block"; }
        if (event.target.id === "menu__section3") {
            thirdSection.style.display = "block"; }
        if (event.target.id === "menu__section4") {
            fourthSection.style.display = "block"; }
 })
}