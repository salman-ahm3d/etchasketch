



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
            if (isAPressed && !eraserEnabled) {
                document.getElementById(pixel.id).style.backgroundColor = currentColor;
            } else if (isAPressed && eraserEnabled) {
                document.getElementById(pixel.id).style.backgroundColor = 'white';
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
const currentColor = 'black';
const eraserBtn = document.querySelector(".eraser-btn");
const clearBtn = document.querySelector(".clear-btn");

let prevColor;

let eraserEnabled = false;

eraserBtn.addEventListener('click', () => {
    if (!eraserEnabled) {
        eraserEnabled = true;
    } else {
        eraserEnabled = false;
    }
})


clearBtn.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        document.getElementById(pixel.id).style.backgroundColor = 'white';
    })
})



colorOnClick();
