var x = 0;
var y = 0;
let letters = "programsam";
let positions = [];
let velocities = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < letters.length; i++) {
        positions.push({ x: random(width), y: random(height) });
        velocities.push({ vx: random(-3, 3), vy: random(-3, 3) });
    }
    textSize(32);
}

function draw() {
    background('ffffff');
    fill(0); 

    for (let i = 0; i < letters.length; i++) {
        // Draw the letter
        text(letters[i], positions[i].x, positions[i].y);

        // Update position
        positions[i].x += velocities[i].vx;
        positions[i].y += velocities[i].vy;

        // Bounce off edges
        if (positions[i].x < 0 || positions[i].x > width) velocities[i].vx *= -1;
        if (positions[i].y < 0 || positions[i].y > height) velocities[i].vy *= -1;


    }
}
