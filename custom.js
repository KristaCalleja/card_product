// Select footer-overlay
let footerOverlayDesktop = document.querySelector('.footer-overlay__desktop');
let footerOverlayMobile = document.querySelector('.footer-overlay__mobile');

// Select button for assigning handler
let button = document.querySelector('.footer__icon');

// Select footer from HTML
let footer = document.querySelector('.footer');

// Function to assign handler using a DOM property on event
button.addEventListener('click', function(){
// Special method 'replaceWith' to replace node with given node
    footerOverlayDesktop.classList.toggle('active');
});

button.addEventListener('click', function(){
    footer.replaceWith(footerOverlayMobile);
});
