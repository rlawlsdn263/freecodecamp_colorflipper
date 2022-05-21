const colors = ['#FFE3A9', '#FFC3C3', '#FF8C8C',]


const body = document.querySelector('body');
const backgroundColor = document.querySelector('.backgroundColor'); 
const btn = document.querySelector('.btn');
const colorCode = document.querySelector('.fontColor');

function randomColorHandler() {
    const randomColor = colors[Math.floor(Math.random()*3)];
    body.style.backgroundColor = `${randomColor}`;
    colorCode.innerText = `${randomColor}`;
    colorCode.style.color = `${randomColor}`;
};

randomColorHandler();
btn.addEventListener('click', randomColorHandler);