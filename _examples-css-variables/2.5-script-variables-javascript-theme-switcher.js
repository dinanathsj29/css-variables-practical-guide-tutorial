console.log('in 2.5-script-variables-javascript-theme-switcher.js');

// get the root element
var root = document.querySelector(':root');

// get swatches
var swatches = document.querySelectorAll('.swatches-container div');

swatches.forEach((curSwatch) => {
  // click on each swatch button
  curSwatch.addEventListener('click', (evt) => {
    // set/replace root style color with currently clicked color
    root.style.setProperty('--main-theme-color', event.target.style.backgroundColor);

  }) // addEventListener
}) // forEach
