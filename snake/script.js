const grid = document.getElementById("grid");

function makeGrid(cols, rows) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = "("+(c-(Math.floor(c/cols)*cols))+","+Math.floor(c/cols)+")";
        grid.appendChild(cell).className = "grid-item";
        grid.appendChild(cell).id = (c-(Math.floor(c/cols)*cols))+","+Math.floor(c/cols);
    };
};

function colorSquare(x, y) {
    let coordinates = toString(x+','+y);
    document.getElementById('4,4').style.backgroundColor = "green";
}

makeGrid(16, 9);

colorSquare(4,4);