noseX=0;
noseY=0;
function draw()
{
  image(video,0,0,300,300);
 image(moustacheNose,noseX,noseY,30,30);
}

function setup()
{
  canvas= createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300,300);
  video.hide();
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotPoses);
  
}

function gotPoses(results) 
{
  
 if (results.length > 0 )
{
  console.log (results);
  noseX=results[0].pose.nose.x-10;
  noseY=results[0].pose.nose.y-10;
  console.log("noseX= "+noseX);
  console.log("noseY= "+noseY);
}
}

function preload()
{
 moustacheNose=loadImage("https://i.postimg.cc/mg34qMBs/mustache.jpg");

}

function modelLoaded()
{
  console.log("posNet is loaded");
}

function take_snapshot()
{
 save("moustavche_fiter_picture.png");
}