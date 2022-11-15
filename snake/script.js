const grid = document.getElementById("grid");

function makeGrid(rows, cols) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        // cell.innerText = (c + 1);
        grid.appendChild(cell).className = "grid-item";
        grid.appendChild(cell).id = "("+(c-(Math.floor(c/cols)*cols))+","+Math.floor(c/cols)+")";
    };
};

makeGrid(10, 16);