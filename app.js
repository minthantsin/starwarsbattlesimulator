let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let a = new Image();
a.src = ships[0].image;

ctx.drawImage(a, 100, 100);
