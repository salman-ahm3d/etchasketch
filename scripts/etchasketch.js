
let currentSelected;

function createCanvas() {
    let myNode;
    for (let i = 0; i < 256; i++) {
        myNode = document.createElement('div');
        myNode.classList.add('pixel');
        myNode.id = (i+1);
        canvas.appendChild(myNode);
    }
}

function colorOnClick() {
    pixels.forEach((pixel) => {
        pixel.addEventListener('dragenter', function() {
            document.getElementById(pixel.id).style.backgroundColor = 'black';
        });
    })
}




let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

const canvas = document.querySelector(".canvas");
createCanvas();
const pixels = document.querySelectorAll(".pixel");
const defaultColor = 'black';



colorOnClick();
