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
do{
    sleep(1000);
    var CurrentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("ElapsedTime").innerHTML = CurrentTime;
} while (sleep(1000));