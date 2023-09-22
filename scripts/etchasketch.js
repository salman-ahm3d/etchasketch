



function createCanvas() {
    let myNode;
    let cuteFaceIndexes = [23,24,38,39,40,41,42,43,44,54,61,70,78,87,94,103,104,105,106,107,108,109,110,118,127,133,143,148,149,151,152,155,156,159,160,164,167,168,171,172,176,179,180,183,184,187,188,192,195,208,211,224,227,231,235,240,243,247,248,249,250,251,256]
    for (let i = 0; i < 256; i++) {
        myNode = document.createElement('div');
        myNode.classList.add('pixel');
        myNode.id = (i+1);
        if (cuteFaceIndexes.includes(+myNode.id)) myNode.style.backgroundColor = 'black';
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
let currentColor = 'black';
const eraserBtn = document.querySelector(".eraser-btn");
const clearBtn = document.querySelector(".clear-btn");
const colorPickerBtn = document.querySelector(".color-picker-btn");


let prevColor;

let eraserEnabled = false;

eraserBtn.addEventListener('click', () => {
    if (!eraserEnabled) {
        eraserEnabled = true;
        eraserBtn.classList.add("clicked");
    } else {
        eraserEnabled = false;
        eraserBtn.classList.remove("clicked");
    }
})


clearBtn.addEventListener('click', () => {
    pixels.forEach((pixel) => {
        document.getElementById(pixel.id).style.backgroundColor = 'white';
    })
})

colorPickerBtn.addEventListener('change', () => {
    currentColor = colorPickerBtn.jscolor.toRGBString();
    console.log(currentColor);
})


jscolor.presets.default = {
    value: '#000000',
    position: 'right',
    backgroundColor: '#333',
    palette: '#fff #000 #808080 #996e36 #f55525 #ffe438 #88dd20 #22e0cd #269aff #bb1cd4',
};


colorOnClick();
