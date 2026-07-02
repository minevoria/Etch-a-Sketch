"use strict"
const container = document.querySelector(".container");
const containerSize = 500;
const gridAdjustor = document.querySelector("#openPrompt");
const rainbowBtn = document.querySelector("#rainbow");
const normalBtn = document.querySelector("#normal");
const resetBtn = document.querySelector("#reset");
const opaqueBtn = document.querySelector("#opaque");
initiateGrids();

resetBtn.addEventListener("click", () => {
    container.innerHTML = "";
    initiateGrids();
});

gridAdjustor.addEventListener("click", () => {
    let userInput;
    while (true) {
        userInput = prompt("A number less than 100 for grid size.");
        if (userInput === "" || userInput === null) {
            alert("Input cancelled");
            break;
        } else if (userInput > 100) {
            alert("LESS THAN 100!");
            continue;
        } else {
            container.innerHTML = "";
            initiateGrids(+userInput);
            break;
        }
    }

    resetBtn.addEventListener("click", () => {
        container.innerHTML = "";
        initiateGrids(userInput);
    });
});



function initiateGrids(gridNum = 16) {
    
    for (let i = 1; i <= gridNum; i++) {
        for (let j = 1; j <= gridNum; j++) {
            let grid = document.createElement("div");
            grid.style.cssText = `width: ${containerSize / (gridNum)}px; height: ${containerSize / (gridNum)}px`;
            container.appendChild(grid);
        }       
    }
    const grids = document.querySelectorAll(".container div");
    normalGrids(grids);
    rainbowBtn.addEventListener("click", () => {
        rainbowGrids(grids);
    });
    
    normalBtn.addEventListener("click", () => {
        normalGrids(grids);
    });
    
    opaqueBtn.addEventListener("click", () => {
        opaqueGrids(grids);
    })
}

function rgbNoGenerator() {
    return Math.floor(Math.random() * 256);
}

function rainbowGrids(grids) {
    grids.forEach((aGrid)=> {
        aGrid.addEventListener("mouseover", () => {
            aGrid.style.cssText += `background-color: rgb(${rgbNoGenerator()}, ${rgbNoGenerator()}, ${rgbNoGenerator()})`;
        });
    });
}

function normalGrids(grids) {
    grids.forEach((aGrid) => {
        aGrid.addEventListener("mouseover", function () {      
            this.style.backgroundColor = `rgba(37, 37, 40, 0.85)`;
        })
    });
}

function opaqueGrids(grids) {
    grids.forEach((aGrid) => {
        aGrid.dataset.opacity  = 0;
        aGrid.addEventListener("mouseover", function () {      
            let currentOpacity = parseFloat(this.dataset.opacity);
            
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
            }
            this.dataset.opacity = currentOpacity;
            this.style.backgroundColor = `rgba(37, 37, 40, ${currentOpacity})`;
            // this.style.backgroundColor = `rgba(46, 46, 57, 0.3)`;
        })
    });
}
