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
    var r = Math.floor(Math.random() * (255 - 0) + 0);
    var g = Math.floor(Math.random() * (255 - 0) + 0);
    var b = Math.floor(Math.random() * (255 - 0) + 0);
    var color = "rgb("+r+","+g+","+b+")"

    if (target !== bigContainer) {
      target.style['background'] = color;
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

    let numBoxes = prompt("How many boxes do you want per row?");

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

/*
var smallBox = document.getElementsByClassName('smallBox');
for (var i = 0; i < smallBox.length; i++) {
    menuBoxes[i].onmouseover = function(e) {
        var color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        var colorString = `0px 0px 30px 0px ${color}`;
        this.style['box-shadow'] = colorString;
        this.style['-webkit-box-shadow'] = colorString;
        this.style['-moz-box-shadow'] = colorString;
    }  
}
*/