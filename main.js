rightWristX=0;
leftWristX=0;
difference=0;
function setup()
{
    canvas=createCanvas(600,400);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);   
}
function draw()
{
    background('#6C91C2');

    textSize(difference);
    fill('#FFE787');
    text('Hithendhra', 50 , 400);
}
function modelLoaded()
{
    console.log('poseNet model initialized');
}
function gotposes(results)
{
    if (results.length > 0 )
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(rightWristX-leftWristX);
     
        
    }
}