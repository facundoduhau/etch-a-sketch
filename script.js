// Gets screen density value, and prints it next to the slidebar
const slider = document.querySelector("input");
const value = document.querySelector(".value");
value.textContent = slider.value;

//Function that gets the value of the bar at a given point, 
function getSliderValue()
{
    value.textContent = this.value;
    console.log("The slider has a value of " + slider.value + " in the slide bar")
};

// Adds "pixels" as a value from the slidebar
function addPixel()
{
    const screen = document.querySelector('#screen');
    var pixel = document.createElement('div');
    pixel.className="pixels"
    screen.appendChild(pixel);
};

// Function that multiplyes slider value times itself, to get the area of the grid
function gridArea()
{
    let gridArea = (slider.value*slider.value)
    console.log("The grid has an area of " + gridArea + " pixels");
}

// When the user changes the slide bar value, it returns the new value
slider.oninput = function()
{
    getSliderValue();
    gridArea();
};


// Sets the grid to the default value (50), and also the grid starting value (2500)
getSliderValue(); gridArea();