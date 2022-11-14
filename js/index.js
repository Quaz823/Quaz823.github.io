var today = new Date();
var StartTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("StartTime").innerHTML = StartTime;
while(false){
    setTimeout(function() {
        var CurrentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        document.getElementById("ElapsedTime").innerHTML = CurrentTime;
      }, 1000);
}