
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
        pixel.addEventListener('mousemove', function() {
            if (isAPressed) {
                document.getElementById(pixel.id).style.backgroundColor = 'black';
            }
        });
    })
}





let isAPressed = false;

    document.addEventListener('keydown', function (event) {
      if (event.key === 'a' || event.key === 'A') {
        isAPressed = true;
      }
    });

    document.addEventListener('keyup', function (event) {
      if (event.key === 'a' || event.key === 'A') {
        isAPressed = false;
      }
    });



const canvas = document.querySelector(".canvas");
createCanvas();
const pixels = document.querySelectorAll(".pixel");
const defaultColor = 'black';



colorOnClick();
