var x = 0;
var y = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('rgba(0, 0, 0, 0.1)'); //Low opacity alpha channel to create trailing effect

//Falling meteor thing
    fill(255); 
    noStroke();
    ellipse(x, y, 50, 50);

    x = (x + 1) % windowWidth; 
    y = (y + 2) % windowHeight; 
}