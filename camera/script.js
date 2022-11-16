var video = document.createElement('video');
video.setAttribute('playsinline', 'true');
video.setAttribute('autoplay', 'true');
video.setAttribute('muted', 'false');
video.style.width = '200px';
video.style.height = '200px';

/* Setting up the constraint */
var facingMode = "user"; // Can be 'user' or 'environment' to access back or front camera (NEAT!)
var constraints = {
    audio: true,
    video: {
    facingMode: facingMode
    }
};

/* Stream it to video element */
navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
    video.srcObject = stream;
});