console.log("Hello!");
song="";
status="";
objects= [];

function preload()
{
    song=loadSound("Alert Sound.mp3");
}

function setup()
{
    canvas=createCanvas(420,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(420,380);
    video.hide();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status - Detecting Baby...";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status=true;
    if (status=false)
    {
        song.play();
    }
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        objects=results;
    }
}

function draw()
{
    image(video,0,0,420,380);

    if(status !="")
    {

        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(video, gotResult);
        document.getElementById("status").innerHTML="Status - Baby Detected!";
        fill(r,g,b);
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%", objects[i].x-35, objects[i].y+15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x-80, objects[i].y, objects[i].width, objects[i].height);
       
    }
}