Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);
function selfie(){
    Webcam.snap(function(data){
        document.getElementById("result").innerHTML="<img id='ohon' src='"+data+"'>";
    });
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XC-JkUw32/model.json',modelloaded);
function modelloaded(){
    console.log("model is loaded")
}
prediction1="";
prediction2="";
function speak(){
    var synth=window.speechSynthesis;
    speak1="The first prediction is "+prediction1;
    speak2="& the second prediction is "+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterthis);
}
function hi(){
img= document.getElementById('ohon');
 classifier.classify(img, gotresult);
}
function gotresult(error,results){
if (error) {
    console.error(error);
} else {
    console.log(results);
    document.getElementById("yayay").innerHTML=results[0].label;
    document.getElementById("yay").innerHTML=results[1].label;
    prediction1=results[0].label;
    prediction2=results[1].label;
    speak();
    if (prediction1== "tickled pink") {
document.getElementById("asdf").innerHTML="&#128522;";        
    }
    if (prediction1== "under the weather") {
        document.getElementById("asdf").innerHTML="&#128532;";        
            }
            if (prediction1== "Anger") {
                document.getElementById("asdf").innerHTML="&#128545";        
                    }
                    
                    if (prediction2== "tickled pink") {
                        document.getElementById("asdfg").innerHTML="&#128522;";        
                            }
                            if (prediction2== "under the weather") {
                                document.getElementById("asdfg").innerHTML="&#128532;";        
                                    }
                                    if (prediction2== "Anger") {
                                        document.getElementById("asdfg").innerHTML="&#128545";        
                                            }
}
}