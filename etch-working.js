var n=16; //take grid column value as you want

const bigContainer = document.querySelector('.bigContainer')

for(var i = 1; i < n; i++) {
    bigContainer.innerHTML+='<div class="row">';

    for(j = 0; j < n; j++) {
        bigContainer.innerHTML+='<div class="smallBox">';
    }
}

bigContainer.addEventListener('mouseover', e => {
    var target = e.target
  
    if (target !== bigContainer) {
      target.classList.add('permahover')
    }
  })