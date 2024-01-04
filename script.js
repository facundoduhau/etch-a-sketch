// Gets screen density value, and prints it next to the slidebar

const slider = document.querySelector("input");
const value = document.querySelector(".value");
value.textContent = slider.value;
slider.oninput = function()
{
    value.textContent = this.value;
}

// Adds "pixels" as a value from the slidebar

const screen = document.querySelector('#screen');
var pixel = document.createElement('div');
screen.appendChild(pixel);