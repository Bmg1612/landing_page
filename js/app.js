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
const navList = document.querySelector('.navbar__menu');

  navList.addEventListener('click', function showContent (event) {
      let currentSelection = event.target.id;
      let sectionNumber = currentSelection.slice(-1);
      let element = document.querySelector('#section'+sectionNumber);
      element.style.display = "block";
    })   
