function setup(){
    canvas = createCanvas(380, 380)
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function draw(){
    image(video, 0, 0, 380, 380)
    if(status !=""){
        objectDetector.detect(video,gotResults);
        for(i=0; i<objects.length; i++){
            r = random(255);
            g = random(255);
            b = random(255);
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are: " + objects.length;
            fill(r,g,b);
            percent = floor(objects[i].confidence*100);
            text(objects [i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x -15, objects[i].y -15, objects[i].width, objects[i].height);
        }
    }
}