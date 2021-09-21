console.log("JavaScript is working!");


var c = document.getElementById("myCanvas");
var diamond = c.getContext("2d");

function drawDiamond() {
    diamondShape();
    insideEdges();
    console.log("Diamond had been drawn completely")
}

function diamondShape() {
    console.log("Drawing the shape of the diamond")
    diamond.moveTo(30, 30);
    diamond.lineTo(10, 70);
    diamond.lineTo(100, 190);
    diamond.lineTo(190, 70);
    diamond.lineTo(170, 30);
    diamond.lineTo(30, 30);
    diamond.stroke();
}

function insideEdges() {
    console.log("Drawing the inside edges of the diamond ")
    diamond.moveTo(30, 30);
    diamond.lineTo(100, 190);
    diamond.lineTo(170, 30);

    diamond.moveTo(100, 30);
    diamond.lineTo(47, 70);

    diamond.moveTo(100, 30);
    diamond.lineTo(153, 70);

    diamond.moveTo(10, 70);
    diamond.lineTo(190, 70);
    diamond.stroke();
}

drawDiamond();
