let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = () => {
    console.log("klawisz");

}

window.addEventListener('keydown', changeColor)