//Prevents dragging
window.ondragstart = function() {
    return false;
}

const resetBtn = document.querySelector("#btn");
const etchASketch = document.querySelector("#etchASketch");
const gridContainer = document.querySelector("#grid-container");

//Creates the grid container
const createGridContainer = () => {
    const gridContainer = document.createElement("div");
    gridContainer.id = "grid-container"
    etchASketch.appendChild(gridContainer);
}

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

//Reset button functionality
resetBtn.addEventListener("click", e =>{
    const gridContainer = document.querySelector("#grid-container");
    gridContainer.remove();
    createGridContainer();
    setGridSize(prompt("Enter grid size (Eg. '16' creates a 16x16 grid)"));
    const gridBlocks = document.querySelectorAll(".gridBlock");


gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener("mouseenter", function(e) {   
        e.target.setAttribute("class", "hovered")
    });
});
});

//Initial settings
createGridContainer();
setGridSize(16);

//Hover to draw function
const gridBlocks = document.querySelectorAll(".gridBlock");
gridBlocks.forEach((gridBlock) => {
    gridBlock.addEventListener("mouseenter", function(e) {   
        e.target.setAttribute("class", "hovered")
    });
});
