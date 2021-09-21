console.log('JavaScript is working!')

var c = document.getElementById("myCanvas");
var diamond = c.getContext("2d");
diamond.moveTo(0, 50);
diamond.lineTo(100, 100);
diamond.lineTo(200, 50);
diamond.lineTo(100, 0);
diamond.lineTo(0, 50);
diamond.stroke();
