status1 = "";

function preload()
{
    fruitbasket_image = loadImage("fruit basket.png");
}

function setup()
{
    canvas = createCanvas(600, 400);
    canvas.center();
    objectDetected = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelLoaded()
{
    status1 = "true";
    console.log("Model Loaded");
    objectDetected.detect(fruitbasket_image, gotResults);
}
function draw()
{
    image(fruitbasket_image, 0, 0, 600, 400);
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