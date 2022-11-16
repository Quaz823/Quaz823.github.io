const grid = document.getElementById("grid");
const html = document.getElementById("html")

var square;

function makeGrid(cols, rows) {
    grid.style.setProperty('--grid-rows', rows);
    grid.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = "("+(c-(Math.floor(c/cols)*cols))+","+Math.floor(c/cols)+")";
        grid.appendChild(cell).className = "grid-item";
        grid.appendChild(cell).id = (c-(Math.floor(c/cols)*cols))+","+Math.floor(c/cols);
    };
    return c;
};

function snakeSquare(x, y, toggle=true) {
    let coordinates = x+','+y;
    if (toggle) {
        document.getElementById(coordinates).style.backgroundColor = "green";
    } else {
        document.getElementById(coordinates).style.backgroundColor = "white";
    }
};

function snakeLocate(){

}

function snakeMove(directionKey){
    if (directionKey == w){
        
    }
    if (directionKey == a){

    }
    if (directionKey == d){

    }
    if (directionKey == s){

    }
}

square = makeGrid(16, 9);
console.log(square)

snakeSquare(4,4);

html.addEventListener('keydown', (e) => {
    if (!e.repeat) {
        console.log('Key '+e.key+' pressed [event: keydown]');
    }
});