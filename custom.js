// Select footer-overlay
let footerOverlay = document.querySelector('.footer-overlay');
// Select button for assigning handler
let button = document.querySelector('.footer__icon');
// Select footer from HTML
let footer = document.querySelector('.footer');

// Function to assign handler using a DOM property on event
button.addEventListener('click', function(){
// Special method 'replaceWith' to replace node with given node
    footerOverlay.classList.toggle('visible');
    // footer.classList.toggle('display');
});


