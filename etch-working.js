const bigContainer = document.querySelector('.bigContainer')

window.onload = function initializeGrid() {
    for(let i = 0; i < 16; i++) {
        bigContainer.innerHTML+='<div class="row">';
    
        for(let j = 0; j < 16; j++) {
            bigContainer.innerHTML+='<div class="smallBox">';
        }
    }
}

bigContainer.addEventListener('mouseover', event => {
    let target = event.target
  
    if (target !== bigContainer) {
      target.classList.add('permahover')
    }
  })

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    const smallBoxes = document.querySelectorAll('.smallBox');
    smallBoxes.forEach(box => box.classList.remove('permahover'));
});

const redrawGridButton = document.querySelector('#redrawGridButton');
redrawGridButton.addEventListener('click', () => {
    bigContainer.innerHTML = "";

    let numBoxes = prompt("How many boxes do you want per row?");

    for(let i = 0; i < numBoxes; i++) {
        bigContainer.innerHTML+='<div class="row">';
    
        for(let j = 0; j < numBoxes; j++) {
            bigContainer.innerHTML+='<div class="smallBox">';
        }
    }
});

