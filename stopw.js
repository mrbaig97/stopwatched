let miliseconds = 0;
let seconds = 0;
let minutes = 0;

let displayMiliseconds=0;
let displaySeconds=0;
let displayMinutes=0;

let status = "stopped";
let interval = "started";

function startwatch(){
    miliseconds++;
    if (miliseconds/30 === 1){
        miliseconds = 0;
        seconds++;
    
if (seconds/60 === 1){
    seconds = 0;
    minutes++;

}
}
if(miliseconds < 10){
    displayMiliseconds  = "0" + miliseconds.toString();
}
else{
    displayMiliseconds=miliseconds;
}
if(seconds < 10){
    displayseconds  = "0" + seconds.toString();
}
else{
    displayseconds=seconds;
}
if(minutes < 10){
    displayMinutes  = "0" + minutes.toString();
}
else{
    displayMinutes=minutes;
}
document.getElementById("display").innerHTML = displayMinutes + ":" + displayseconds + ":" + displayMiliseconds;
    }


function startstop(){
    if(status=="stopped"){
        interval = window.setInterval(startwatch,30);
        document.getElementById("handler").innerHTML = "stop";
        status = "started";
    }
    else if(status == "started"){
        window.clearInterval(interval);
        document.getElementById("handler").innerHTML = "start";
        status = "stopped";
    }
}
function Reset(){
    miliseconds=0;
    seconds=0;
    minutes=0;
    window.clearInterval(interval);
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("handler").innerHTML = "start";
    status = "stopped";
}
