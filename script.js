// Selecting elements
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Click event for menu toggle
menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Scroll event to hide navbar when scrolling
window.addEventListener('scroll', () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
});
