// Gets screen density value, and prints it next to the slidebar
const slider = document.querySelector("input");
const value = document.querySelector(".value");
var grid;

//Function that gets the value of the bar at a given point, 
function getSliderValue()
{
    value.textContent = this.slider.value;
    console.log(slider.value)
};

// Adds "pixels" as a value from the slidebar
function addPixel()
{
    let screen = document.querySelector('#screen');
    let pixel = document.createElement('div');
    pixel.style.width = "inherit"
    screen.appendChild(pixel);
};

// Function that multiplyes slider value times itself, to get the area of the grid
function gridArea()
{
    grid = (slider.value*slider.value)
    console.log(grid);
}

// Creates the needed pixels
function addGrid()
{
    for (let i = 1; i < grid; i++)
    {
        addPixel();
    }
}









// When the user changes the slide bar value, it returns the new value
slider.oninput = function()
{
    getSliderValue();
    gridArea();
    value.textContent = slider.value;
    addGrid();
};

// Sets the grid to the default value (50), and also the grid starting value (2500)
getSliderValue();
gridArea();


