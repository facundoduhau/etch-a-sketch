var sizeButton = document.getElementById('sizeButton');
sizeButton.addEventListener('click', makeGrid);

for (let i = 0; i < 256; i++)
{
    makePixel();
}

function deleteGrid()
{
    grid.innerHTML = '';
}

function makePixel()
{
    var grid = document.getElementById('grid')
    var pixel = document.createElement('div');
    pixel.className = "pixel";
    grid.append(pixel);
}

function makeGrid()
{
    selectedSize = prompt("What is your desired grid size?: ")
    console.log("Selected size is:", selectedSize);

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

