function preload() {
    mustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
  
function setup() {
    canvas = createCanvas(400, 400);
    canvas.position(450,130);
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function draw() {
    image(video, 0, 0, 400, 400);
    image(mustache, noseX, noseY, 60, 60);
}

function gotPoses(results) {
    if (results.length > 0) {
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("Nose coordinates - X: " + noseX + ", Y: " + noseY);
    }

}
function save_image() {
    save('myFilterImage.png');
}