var video = document.getElementById("videos");
var playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "Pause";
    } else {
        video.pause();
        playPauseBtn.textContent = "Play";
    }
});
