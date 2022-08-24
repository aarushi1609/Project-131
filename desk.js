status1 = "";

function preload()
{
    desk_image = loadImage("desk.png");
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
    image(desk_image, 0, 0, 600, 400);
}
function modelLoaded()
{
    status1 = "true";
    console.log("Model Loaded");
    objectDetected.detect(desk_image, gotResults);
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