const container = document.querySelector('.container');


let containerDensity;
let density;

function draw(){
    containerDensity = prompt("Tell me the density:");
    density = 700 / +containerDensity;
    for (let i=0; i<containerDensity; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        container.append(row)
        for (let j=0; j<containerDensity; j++){
            let item = document.createElement('div');
            item.style.width = density+'px';
            item.style.height = density+'px';
            item.classList.add('item');
            row.append(item);
        }
    }
}

draw();

let color;


function random_item(items){
return items[Math.floor(Math.random()*items.length)];    
}

var colors = ["black", "white", "gray", "silver", "maroon", "red", "purple", "fushsia", "green", "lime", "olive", "yellow", "navy", "blue", "teal", "aqua"];



document.querySelector('.container').addEventListener('mouseover', function(e){
    const target = e.target;
    if (target.matches('.item')) {
        if(document.getElementById('nigga').checked) {
            color = "black";
          }else if(document.getElementById('gay').checked) {
            //make it rainbow in the future...
            color = random_item(colors);
          }
        target.style.backgroundColor = color;
    }
})


const row = document.querySelector('.row');
const item = document.querySelector('.item');

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function resize(){
    removeAllChildNodes(container);
    draw();
}

let items;
function shake(){
    items = document.querySelectorAll('.item');
    for (let z=0; z<(containerDensity*containerDensity); z++){
        items[z].style.backgroundColor = 'white';
    }
}

function changeColorToBlack(){
    color = "black";
}

function changeColorToRaibow(){
    color = "pink";
}