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
// select all the sections

const sectionElement = document.querySelectorAll('section');
const createNav = document.querySelector('#navbar__list');
const menuLink = document.querySelectorAll('.menu__link')
const dataNavs = document.querySelectorAll('[data-nav]')

/**
 * End Global Variables*/

// build the nav by iterating through the sections on the page

sectionElement.forEach( (e) => {
    //create li element
    let createdLi = document.createElement('li');

    // store data-nav attribute in a value
    let dataNav = e.getAttribute('data-nav');
    

    // add class to li
    createdLi.classList.add('menu__link');

    //append li to ul
    createNav.appendChild(createdLi);

    //create anchor tag
    let anchorTag = document.createElement("a");

    // iterate href on anchor
    anchorTag.href =  "#" +  e.id;

    //add content to anchor
    anchorTag.textContent = dataNav;
    
    //add anchor to li
    createdLi.appendChild(anchorTag);
});

//  logic for sections position in viewport

function isInViewport(e) { 
    let rect = e.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  
}

// Add class 'active' to section when near top of viewport

window.addEventListener('scroll', toggleClassFunction);
    function toggleClassFunction()  { 
        // iterates through all sections and adds/ removes class
        for (i = 0; i < sectionElement.length; i++) {
            if(!isInViewport(sectionElement[i])){
                sectionElement[i].classList.remove('your-active-class');
            } else {
                sectionElement[i].classList.add('your-active-class');
            }
        }
    }

// Smooth scroll to section when anchor is clicked

const aElement = document.getElementsByTagName('a')
for (let i = 0; i < sectionElement.length; i++) {
    let element = sectionElement[i];
    let anchor = aElement[i];
    // click event listener with smooth scroll
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        element.scrollIntoView({behavior: "smooth" });
    });
    
}


