Webcam.set
({
    width:310,
    height:300,
    image_format: 'png',
    png_quality: 90,

    constraints:{
        facingMode:'environment'
    }
});

camera = document.getElementById("camera");
Webcam.attach("camera");

function take_snapshot()
{
    Webcam.snap(function(data_url){
    document.getElementById("result").innerHTML= '<img id="result_image" src="'+data_url+'">';
    }); 
}

console.log('ml5.version' , ml5.version);

classifier = ml5.imageClassifier('MobileNet' , modelLoaded);

function modelLoaded()
{
    console.log("modelLoaded");
}

function check()
{
    img = document.getElementById("result_image");
    classifier.classify(img , getresult);
}

function getresult(error,result)
{
    if(error){
        console.log("error");
    } else {
    console.log("result");
    document.getElementById("object_name").innerHTML = result[0].label;
    }
}