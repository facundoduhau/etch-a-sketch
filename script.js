var gridArea;

// Gets screen density value, and prints it next to the slidebar
const slider = document.querySelector("input");
const value = document.querySelector(".value");
value.textContent = slider.value;

function getSliderValue()
{
    value.textContent = this.value;
    gridArea = (slider.value*slider.value)
    console.log(gridArea);
};

slider.addEventListener("input", getSliderValue());

// Adds "pixels" as a value from the slidebar
function addPixel()
{
    const screen = document.querySelector('#screen');
    var pixel = document.createElement('div');
    pixel.className="pixels"
    screen.appendChild(pixel);
}

// the grid Area is side * side, so, this function helps to make an even grid, by multiplying the chosen value times itself
function sideBySide()
{
    gridArea = (slider.value*slider.value)
    console.log(gridArea);
}

