function preload(){
    tint_color = "";
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide(); 
}

function draw() {

    fill(0, 127, 0);
    rect(15, 15, 30, 450);
    rect(595, 15, 30, 450);
    rect(30, 435, 595, 30);
    rect(30, 15, 595, 30);
    fill(255, 0, 0);
    circle(30, 30, 60);
    circle(610, 30, 60);
    circle(610, 450, 60);
    circle(30, 450, 60);
    image(video, 80, 60, 480, 360);
}

function take_snapshot() {
    save("framed.png");
}