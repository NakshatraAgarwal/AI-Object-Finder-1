


status = "";
input_value = "";
objects = [];

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
   if(status != ""){

   ObjectDetector.detect(video, gotresults);

   for( i = 0; i < objects.length; i++){
   fill("red");
    document.getElementById('status').innerHTML = "Status: Object Detected";
    percent = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
    noFill();
    stroke('red');
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

    if(object[i].label == input_value){

        document.getElementById('object_status').innerHTML = "Status: " + input_value + " Found";
        var synth= window.speechSynthesis;
        speak_data= input_value + 'Found';
        var utterthis= new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterthis);
    }

    else{
        document.getElementById('object_status').innerHTML = "Status: " + input_value + " Not Found";
    }
    





   }

   }

}

function play(){
input_value = document.getElementById('input').value;
console.log(input_value);
ObjectDetector = ml5.objectDetector('cocossd', modelloaded);
document.getElementById('status').innerHTML = "Status: Detecting Object";
}

function modelloaded(){

     console.log('model loaded');
     status = true;

}

function gotresults(error, results){

   if(error){
       console.error(error);
   }

   console.log(results);
objects = results;
}