console.log('in 1.7.1-script-variables-javascript-interaction.js');

// get the root element
var root = document.querySelector(':root');
//console.log('root', root);

// get all the styles/CSSStyleDeclaration for root
var rootStyles = getComputedStyle(root);
console.log('rootStyles', rootStyles);

// get --base-bg-color variable value available inside root styles
// var baseBgColor = rootStyles.getPropertyValue('--base-bg-color');
// console.log('baseBgColor', baseBgColor);

root.style.setProperty('--base-bg-color', '#f66969') // red- #f66969; green - #66f969; blue- #6696f9;
