let containerDensity = prompt("Tell me the density:");
let density = 700 / +containerDensity;


const container = document.querySelector('.container');



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

document.querySelector('.container').addEventListener('mouseover', function(e){
    const target = e.target;
    if (target.matches('.item')) {
        target.style.backgroundColor = 'black';
    }
})

const items = document.querySelectorAll('.item');
function shake(){
    for (let z=0; z<(containerDensity*containerDensity); z++){
        items[z].style.backgroundColor = 'antiquewhite'
    }
}