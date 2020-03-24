const bigContainer = document.querySelector('.bigContainer')

window.onload = function initializeGrid() {
    for(let i = 0; i < 16; i++) {
        bigContainer.innerHTML+='<div class="row">';
    
        for(let j = 0; j < 16; j++) {
            bigContainer.innerHTML+='<div class="smallBox">';
        }
    }
}

let rbgPercentValue = 90;

bigContainer.addEventListener('mouseover', event => {
    let target = event.target
    let rbgPercentValue = parseInt(target.dataset.percent);
    if (isNaN(rbgPercentValue)) rbgPercentValue = 100;
    if (rbgPercentValue >= 10) {
        rbgPercentValue -= 10;
        target.dataset.percent = rbgPercentValue;
    }
        let rgbColor = `rgb(${rbgPercentValue}%,${rbgPercentValue}%,${rbgPercentValue}%)`
    
        if (target !== bigContainer) {
            target.style['background'] = rgbColor;
        }
    
    })

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    const smallBoxes = document.querySelectorAll('.smallBox');
    smallBoxes.forEach(box => box.style['background'] = 'rgb(255,255,255)');
});

const redrawGridButton = document.querySelector('#redrawGridButton');

redrawGridButton.addEventListener('click', () => {
    bigContainer.innerHTML = "";

    let numBoxes = prompt('How many boxes do you want per row?');

    for(let i = 0; i < numBoxes; i++) {
        bigContainer.innerHTML+='<div class="row">';
    
        for(let j = 0; j < numBoxes; j++) {
            bigContainer.innerHTML+='<div class="smallBox">';
        }
    }

    let elems = document.getElementsByClassName('smallBox');
    let testVar = 16 * 40 / numBoxes;
    for(var i = 0; i < elems.length; i++) {
        elems[i].style.height = `${testVar}px`;
        elems[i].style.width = `${testVar}px`;
    }

});