// Create div element
let div = document.createElement('div');
// Set its class to .footer-overlay
div.className = '.footer-overlay';

// Select button for assigning handler
let button = document.querySelector('.footer__icon');

// Select footer from HTML
let footer = document.querySelector('.footer');

// Function to assign handler using a DOM property on event
button.onclick = function(){
// Special method 'replaceWith' to replace node with given node
    footer.replaceWith(div);
};
