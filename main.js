video="";
var status="";
objects=[];

function preload(){
    video=createVideo('video.mp4');
    video.hide();

}

function setup() {
    canvas=createCanvas(480,380);
    canvas.center();
}

function draw() {
    image(video,0,0,480, 380);
    if(status != "")
    {
        objectDetector,detect(video, gotResult);
        for (i=0; i<objects.length; i++) {
            document.getElementById("status").innerHTML="Number of objrcts detected are : "+ objects.lenght;

          
        }
    }
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects.log=results;
}

function start()
{  
   objectDetector=ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded() {
    console.log('Model Loaded!');
    video.loop();
    video.speed(1);
    video.volume(0);
}