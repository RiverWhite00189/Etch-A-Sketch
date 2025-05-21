//main grid 
let grid = document.querySelector("div");

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.setAttribute("id", i + 1);
    row.setAttribute("class", "row");
    grid.appendChild(row);

    for (let j = 0; j < 16; j++) {
        let box = document.createElement("div");
        let newId = i + 1 + "-" + (j + 1);
        box.setAttribute("id", newId);
        box.setAttribute("class", "clean-box");
        box.textContent = '*'
        box.style.width = "16px";
        box.style.height = "16px";
        row.appendChild(box);


        box.addEventListener("mouseover", () => {
            box.removeAttribute("class", "clean-box");
            box.setAttribute("class", "dirty-box");
        });
    }
}
