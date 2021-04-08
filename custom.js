// Create div element
let div = document.createElement('div');
// Select footer from HTML
let footer = document.querySelector('.footer');
// Set its class to .footer-overlay
div.className = '.footer-overlay';
// Special method 'replaceWith' to replace node with given node
footer.replaceWith(div);
