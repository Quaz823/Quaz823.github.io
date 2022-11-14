var today = new Date();
var StartTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("StartTime").innerHTML = "Start Time: " + StartTime;

function updateTime(){
    var timething = new Date();
    let CurrentTime = timething.getHours() + ":" + timething.getMinutes() + ":" + timething.getSeconds();
    document.getElementById("CurrentTime").innerHTML = "Current Time: " + CurrentTime;
};

let ElapsedTime = 0;
function updateElapsedTime(){
    ElapsedTime+=1;
    document.getElementById("ElapsedTime").innerHTML="Elapsed Time: "+ElapsedTime;
}

setInterval(updateTime, 1000);
setInterval(updateElapsedTime, 1000)