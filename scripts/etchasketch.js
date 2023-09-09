const canvas = document.querySelector(".canvas");

function createCanvas() {
    let myNode;
    for (let i = 0; i < 256; i++) {
        myNode = document.createElement('div');
        myNode.classList.add('pixel');
        myNode.id = (i+1);
        canvas.appendChild(myNode);
    }
}

createCanvas();