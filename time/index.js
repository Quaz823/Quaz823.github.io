var today = new Date();

function LengthOfNum(number){
    var length = Math.log(number) * Math.LOG10E + 1 | 0;
    return length;
}

function AddZeroToNum(number){
    if (LengthOfNum(number) < 2){
        return true;
    } else {
        return false;
    }
}
var Hours = null;
var Minutes = null;
var Seconds = null;
if(AddZeroToNum(today.getHours())){
    var Hours = "0"+today.getHours();
}else{
    var Hours = today.getHours();
};
if(AddZeroToNum(today.getMinutes())){
    var Minutes = "0"+today.getMinutes();
}else{
    var Minutes = today.getMinutes();
};
if(AddZeroToNum(today.getSeconds())){
    var Seconds = "0"+today.getSeconds();
}else{
    var Seconds = today.getSeconds();
};

var StartTime = Hours + ":" + Minutes + ":" + Seconds;
document.getElementById("StartTime").innerHTML = "Start Time: " + StartTime;

function updateTime(){
    var timething = new Date();
    if(AddZeroToNum(timething.getHours())){
        var Hours = "0"+timething.getHours();
    }else{
        var Hours = timething.getHours();
    };
    if(AddZeroToNum(timething.getMinutes())){
        var Minutes = "0"+timething.getMinutes();
    }else{
        var Minutes = timething.getMinutes();
    };
    if(AddZeroToNum(timething.getSeconds())){
        var Seconds = "0"+timething.getSeconds();
    }else{
        var Seconds = timething.getSeconds();
    };
    let CurrentTime = Hours + ":" + Minutes + ":" + Seconds;
    document.getElementById("CurrentTime").innerHTML = "Current Time: " + CurrentTime;
};

function updateElapsedTime(){
    var timething = new Date();
    document.getElementById("ElapsedTime").innerHTML="Elapsed Time: "+(timething.getHours()-today.getHours())+":"+(timething.getMinutes()-today.getMinutes())+":"+(timething.getSeconds()-today.getSeconds());
}

setInterval(updateTime, 1000);
setInterval(updateElapsedTime, 1000)