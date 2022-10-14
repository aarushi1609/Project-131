status1 = "";
objects = [];

function preload()
{
    bottles_image = loadImage("bottle.jpg");
}

function setup()
{
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetected = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}
function draw()
{
    image(bottles_image, 0, 0, 600, 400);

    if(status1 != "")
    {
        for(i=0; i <objects.length; i++)
        {
            confidence = floor(objects[i].confidence*100);
            document.getElementById("status").innerHTML = "Status Detected";

            fill("#68A7AD");
            text(objects[i].label + ": " + confidence + "%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#68A7AD");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

            document.getElementById("status").innerHTML = "There is 1 object in the image while the number of dectected objects: " + objects.length ;
        }
    }
}
function modelLoaded()
{
    status1 = "true";
    console.log("Model Loaded");
    objectDetected.detect(bottles_image, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        objects = results;
    }
    
}