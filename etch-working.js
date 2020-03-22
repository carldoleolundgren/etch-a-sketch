var n=16; //take grid column value as you want

const bigContainer = document.querySelector('.bigContainer')

for(let i = 1; i < n; i++) {
    bigContainer.innerHTML+='<div class="row">';

    for(let j = 0; j < n; j++) {
        bigContainer.innerHTML+='<div class="smallBox">';
    }
}

bigContainer.addEventListener('mouseover', e => {
    let target = e.target
  
    if (target !== bigContainer) {
      target.classList.add('permahover')
    }
  })

const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', () => {
    const smallBoxes = document.querySelectorAll('.smallBox');

    smallBoxes.forEach(box => box.classList.remove('permahover'));
});
