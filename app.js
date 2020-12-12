let starDestroyer = {
  name: "Imperial Star Destroyer",
  size: 100,
  health: 10000,
  shield: 5000,
  speed: 1,
  accelTime: 10000,
  weapons: [],
  image: "img/starDestroyera.png"
};

let mc80HomeOne = {
  name: "MC80 Home One Variant",
  size: 90,
  health: 10000,
  shield: 10000,
  speed: 1.5,
  accelTime: 7500,
  weapons: [],
  image: "img/mc80HomeOne.png"
};

// The export variable that we use.
let ships = [starDestroyer, mc80HomeOne];


let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let a = new Image();
a.src = ships[0].image;

ctx.drawImage(a, 100, 100);
