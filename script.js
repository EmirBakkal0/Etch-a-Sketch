const mainGrid=document.querySelector(".container");
const DEFAULT_SIZE=16;
const layoutSize=document.querySelector("#layout-size")

makeGrid=(gridSize) => {
    let px= 640/Math.abs(gridSize);
    console.log(px);

    for (let i = 0; i < gridSize*gridSize; i++) {
        let grid = document.createElement("div")
        grid.style=`width: ${px}px; height: ${px}px;`
        grid.classList.add("grid-element")
        mainGrid.appendChild(grid);
    }
    layoutSize.innerText=` ${gridSize}x${gridSize}  `;
}

mainGrid.addEventListener("mouseover",(event)=>{

    event.target.style.backgroundColor=`rgb(${randomColor()},${randomColor()},${randomColor()}`;
    // alert(event.target)
});

randomColor= ()=>{
    return Math.floor(Math.random()*255);
}
clearGrid = () => {
    mainGrid.innerHTML=""
}

const layoutBtn = document.querySelector("#change-layout");
layoutBtn.addEventListener("click",(event)=> {
   let gridSize=prompt("Enter grid size: (enter 32 for 32x32) ")
    clearGrid()
    makeGrid(gridSize);

});
window.onload=() =>{
    makeGrid(DEFAULT_SIZE);
}
// makeGrid(size)