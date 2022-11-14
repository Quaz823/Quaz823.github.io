var today = new Date();
var StartTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("StartTime").innerHTML = StartTime;
while(true){
    var CurrentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("ElapsedTime").innerHTML = CurrentTime;
}