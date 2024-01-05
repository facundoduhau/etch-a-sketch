// Gets screen density value, and prints it next to the slidebar
const slider = document.querySelector("input");
const value = document.querySelector(".value");
var grid;
var width;
var pixel;
const percentage = "100%"
var addPercentage;
var screen;

//Function that gets the value of the bar at a given point, 
function getSliderValue()
{
    console.log(slider.value)
};

// Adds "pixels" as a value from the slidebar
function addPixel()
{
    screen = document.querySelector('#screen');
    pixel = document.createElement('div');
    pixel.classList = "pixels";
    pixel.style.width = addPercentage;
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
    for (let i = 1; i <= grid; i++)
    {
        addPixel();
    }
}

// Function that calculates width for the divs
function pixelWidth()
{
    addPercentage = "calc(" + percentage + " / " + slider.value + ")";
    console.log(addPercentage);
};

// When the user changes the slide bar value, it returns the new value
slider.oninput = function()
{
    getSliderValue();
    gridArea();
    value.textContent = slider.value;
    pixelWidth();
    addGrid();
};

// Sets the grid to the default value (50), and also the grid starting value (2500)
getSliderValue();
gridArea();
pixelWidth();
addGrid();