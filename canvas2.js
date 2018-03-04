var canvas;
var ctx;
window.onload = init;

function init() {
    canvas = document.getElementById("my-canvas");
    ctx = canvas.getContext("2d");
    drawWindow();
    // drawBody();
}
function drawWindow() {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 5;
    ctx.moveTo(10,173);
    ctx.lineTo(492,173);
    ctx.lineTo(400,500);
    ctx.lineTo(0,0);
    ctx.stroke();
}
function drawBody() {
    ctx.fillStyle="white";

}