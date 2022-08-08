// create a for loop that makes a 16by16 matrix
const container = document.querySelector('.container');

for (let i=0; i<16; i++){
    let row = document.createElement('div');
    row.classList.add('row');
    container.append(row)
    for (let j=0; j<16; j++){
        let item = document.createElement('div');
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