const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    if (r + g + b < 250) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
    return `rgb(${r}, ${g}, ${b})`;
}