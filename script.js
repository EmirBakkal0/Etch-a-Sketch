const mainGrid=document.querySelector(".container");

let size=256;

for (let i = 0; i < size; i++) {
    let grid=document.createElement("div")
    grid.className="grid-element"
    mainGrid.appendChild(grid);

}

mainGrid.addEventListener("mouseover",(event)=>{
    event.target.style.backgroundColor="black";
    // alert(event.target)
});