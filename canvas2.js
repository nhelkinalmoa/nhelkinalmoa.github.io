var canvas;
var ctx;
window.onload = init;

function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    drawWindow();
    drawBody();
}
function drawWindow() {
    ctx.strokeStyle = "blue";
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(68,114);
    ctx.lineTo(50,50);
    ctx.lineTo(50,100);
    ctx.lineTo(50,150);
    ctx.stoke();
    ctx.fill(0,0,50,50);
}
function drawBody() {
    ctx.fillStyle="white";

}