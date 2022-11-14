var today = new Date();
var StartTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("StartTime").innerHTML = "Start Time:", StartTime;

function updateTime(){
    var timething = new Date();
    let CurrentTime = timething.getHours() + ":" + timething.getMinutes() + ":" + timething.getSeconds();
    document.getElementById("ElapsedTime").innerHTML = "Current Time:", CurrentTime;
};

setInterval(updateTime, 1000)