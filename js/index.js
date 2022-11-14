function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

var today = new Date();
var StartTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("StartTime").innerHTML = StartTime;
sleep(5000);
while(true){
    sleep(1000);
    var CurrentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("ElapsedTime").innerHTML = CurrentTime;
}