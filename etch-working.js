const smallBox1 = document.createElement('div');
smallBox1.classList.add('small-box');

const bigContainer = document.getElementById('bigContainer');
bigContainer.appendChild(smallBox1);
bigContainer.appendChild(smallBox2);