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
/**
 * End Global Variables*/

// build the nav by iterating through the sections on the page

sectionElement.forEach( function(e){
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


