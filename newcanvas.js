var canvas;
var ctx;
window.onload = init;

function init(){
    canvas = document.getElementById("mine-canvas");
    ctx = canvas.getContext('2d');
    ctx.fillRect(500,0,50,50);
    ctx.fillRect(550,0,50,50);
    ctx.fillRect(600,0,50,50);
    ctx.fillRect(650,0,50,50);
    ctx.fillRect(700,0,50,50);
    ctx.fillRect(750,0,50,50);

    ctx.fillRect(400,50,50,50);
    ctx.fillRect(450,50,50,50);
    ctx.fillRect(800,50,50,50);
    ctx.fillRect(850,50,50,50);

    ctx.fillRect(350,100,50,50);
    ctx.fillRect(900,100,50,50);

    ctx.fillRect(300,150,50,50);
    ctx.fillRect(300,200,50,50);
    
    ctx.fillRect(950,150,50,50);
    ctx.fillRect(950,200,50,50);
