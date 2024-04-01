// Event listener for the grid size
var sizeButton = document.getElementById('sizeButton');
sizeButton.addEventListener('click', makeGrid);

// Event listener for the color
var colorInput = document.getElementById('colorInput')
colorInput.addEventListener('input',clicked)

// Event listener for clear button
var clear = document.getElementById('clear')
clear.addEventListener('click',clearGrid)

// Variable initialization for the starting pixel size, and brush color
var pixelSize = 25;
var colorValue = colorInput.value;
var gridSize = 256

// Makes starting grid
for (let i = 0; i < gridSize; i++)
{
    makePixel();
}

// Deletes grid
function deleteGrid()
{
    grid.innerHTML = '';
}

// Appends pixels to the gridholder, also gives each pixel a class and size
function makePixel()
{
    var grid = document.getElementById('grid')
    var pixel = document.createElement('div');
    pixel.className = "pixel";
    pixel.style.width = pixelSize.toString() + "px";
    pixel.style.backgroundColor = "white";
    pixel.addEventListener("mouseover", function(e)
    {
        if(e.buttons === 1)
        {
            pixel.style.backgroundColor = colorValue;
        }
    })
    grid.append(pixel);
}

// Makes grid with input from the size button
function makeGrid()
{
    var selectedSize = prompt("What is your desired grid size?: ")
    console.log("Selected size is:", selectedSize, "rows and columns");
    gridSize = (selectedSize * selectedSize);
    console.log("Amount of pixels needed is:", gridSize);

    pixelSize = (400/selectedSize);
    console.log("Pixel size needed:", pixelSize)

    deleteGrid();

    for (let i = 0; i < gridSize; i++)
{
    makePixel();
}
}

// Updates the color value
function clicked()
{
    colorValue = colorInput.value;
}

function clearGrid()
{
    deleteGrid();
    for (let i = 0; i < gridSize; i++)
    {
        makePixel();
    }
}
