status = "";
input_value = "";

function prelaod(){

}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){

   image(video, 0, 0, 640, 420);

}

function play(){
input_value = document.getElementById('input').value;
console.log(input_value);
ObjectDetector = ml5.objectDetector('cocossd', modelloaded);
document.getElementById('status').innerHTML = "Status: Detecting Object";
}

function modelloaded(){

     console.log('model laoded');
     status = true;

}