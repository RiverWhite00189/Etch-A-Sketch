//main grid 
let grid = document.querySelector("div");
const MAXPX = 660;

function gridMaker(numBoxes) {
    let boxPx = MAXPX / numBoxes;

    for (let i = 0; i < numBoxes; i++) {
        let row = document.createElement("div");
        row.setAttribute("id", i + 1);
        row.setAttribute("class", "row");
        grid.appendChild(row);

        for (let j = 0; j < numBoxes; j++) {
            let box = document.createElement("div");
            let newId = i + 1 + "-" + (j + 1);
            box.setAttribute("id", newId);
            box.setAttribute("class", "box clean-box");
            //box.setAttribute("class", "clean-box");
            //box.textContent = '*'
            box.style.width = boxPx +"px";
            box.style.height = boxPx +"px";
            row.appendChild(box);

            box.addEventListener("mouseover", () => {
                //box.removeAttribute("class", "clean-box");
                box.setAttribute("class", "box dirty-box");
            });
        }
    }
}

function gridKiller() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(element => element.remove());
}

let reset = document.querySelector("#reset-btn");
reset.addEventListener("click", () => {
    let numBoxes = prompt("Enter the number of squares per side: ");
    gridKiller();
    gridMaker(numBoxes);
});



gridMaker(16)