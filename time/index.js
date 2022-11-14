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
if(AddZeroToNum(today.getHours())){
    var Hours = "0"+today.getHours();
}else{
    var Hours = today.getHours();
};
if(AddZeroToNum(today.getMinutes())){
    var Hours = "0"+today.getMinutes();
}else{
    var Hours = today.getMinutes();
};
if(AddZeroToNum(today.getSeconds())){
    var Hours = "0"+today.getSeconds();
}else{
    var Hours = today.getSeconds();
};
var StartTime = Hours + ":" + Minutes + ":" + Seconds;
document.getElementById("StartTime").innerHTML = "Start Time: " + StartTime;

function updateTime(){
    var timething = new Date();
    let CurrentTime = timething.getHours() + ":" + timething.getMinutes() + ":" + timething.getSeconds();
    document.getElementById("CurrentTime").innerHTML = "Current Time: " + CurrentTime;
};

let ElapsedTime = 0;
function updateElapsedTime(){
    ElapsedTime+=1;
    document.getElementById("ElapsedTime").innerHTML="Elapsed Seconds: "+ElapsedTime;
}

setInterval(updateTime, 1000);
setInterval(updateElapsedTime, 1000)