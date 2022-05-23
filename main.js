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
function randomHexColorHandler() {
    const randomHexColor = Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = `#${randomColor}`;
    colorCode.innerText = `#${randomColor}`;
    colorCode.style.color = `#${randomColor}`;
    console.log(randomHexColor);
}

randomColorHandler();

const colorFlipper = document.querySelector('.colorFlipper');
const simpleHex = document.querySelector('.simpleHex');

if(colorFlipper.classList.contains('bold')) {
    btn.addEventListener('click', randomColorHandler);
    btn.removeEventListener('click', randomHexColorHandler);
}

if(simpleHex.classList.contains('bold')) {
    btn.addEventListener('click', randomHexColorHandler)
    btn.removeEventListener('click', randomColorHandler);
}

simpleHex.addEventListener('click', () => {
    colorFlipper.classList.remove('bold');
    simpleHex.classList.add('bold');

});

colorFlipper.addEventListener('click', () => {
    colorFlipper.classList.add('bold');
    simpleHex.classList.remove('bold');
})