window.ondragstart = function() {
    return false;
}
const resetBtn = document.querySelector("#btn");
const etchASketch = document.querySelector("#etchASketch");
const gridContainer = document.querySelector("#grid-container");

const createGridContainer = () => {
    const gridContainer = document.createElement("div");
    gridContainer.id = "grid-container"
    etchASketch.appendChild(gridContainer);
}
createGridContainer();

function setGridSize(gridSize){
    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridContainer = document.querySelector("#grid-container");
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
        let gridBlock = document.createElement("div");
        gridBlock.setAttribute("class", "gridBlock");
        gridContainer.appendChild(gridBlock);
    }  
}

function clearGrid() {
    let hoveredGrid = document.querySelectorAll(".hovered");
    for (let i = 0; i < hoveredGrid.length; i++) {
        hoveredGrid[i].setAttribute("class", "gridBlock");
    }
}

resetBtn.addEventListener("click", e =>{
    const gridContainer = document.querySelector("#grid-container");
    gridContainer.remove();
    createGridContainer();
    setGridSize(prompt("Enter grid size number (Eg. entering '16' creates a 16x16 grid)"));
    const gridBlocks = document.querySelectorAll(".gridBlock");


gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener("mouseenter", function(e) {   
        e.target.setAttribute("class", "hovered")
    });
});
});

setGridSize(16);

const gridBlocks = document.querySelectorAll(".gridBlock");
gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener("mouseenter", function(e) {   
        e.target.setAttribute("class", "hovered")
    });
});
