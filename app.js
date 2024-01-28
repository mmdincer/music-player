const player = new MusicPlayer(musicList);
let music = player.getMusic();

const container = document.querySelector(".container");
const image = document.getElementById("music-img");
const song = document.getElementById("song");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const volume_high = document.getElementById("volume-high");
const volume_low = document.getElementById("volume-low");
const volume_mute = document.getElementById("volume-mute");
const volumeRange = document.getElementById('volume-range');
const audio = document.getElementById('audio');
const progress_bar = document.getElementById('progress-bar');
const progress_left = document.querySelector(".progress-left");
const progress_right = document.querySelector(".progress-right");

displayMusic();

next.addEventListener("click", () => {
    player.next();
    music = player.getMusic();
    displayMusic();
    pause.style.display = "none";
    play.style.display = "inline";
});

previous.addEventListener("click", () => {
    player.previous();
    music = player.getMusic();
    displayMusic();
    pause.style.display = "none";
    play.style.display = "inline";
});

play.addEventListener("click", () => {
    audio.play();
    pause.style.display = "inline";
    play.style.display = "none";
});

pause.addEventListener("click", () => {
    audio.pause();
    pause.style.display = "none";
    play.style.display = "inline";
})

volume_high.addEventListener("click", () => {
    audio.volume = 0;
    volume_high.style.display = "none";
    volume_mute.style.display = "inline";
});

volume_mute.addEventListener("click", () => {
    audio.volume = 1;
    volume_mute.style.display = "none";
    volume_high.style.display = "inline";
});

volume_low.addEventListener("click", () => {
    audio.volume = 0;
    volume_low.style.display = "none";
    volume_mute.style.display = "inline";
});

document.addEventListener('DOMContentLoaded', function () {
    audio.volume = volumeRange.value;

    audio.addEventListener('volumechange', function () {
        volumeRange.value = audio.volume;
        if(audio.volume == 0) {
            volume_mute.style.display = "inline";
            volume_high.style.display = "none";
            volume_low.style.display = "none";
        }
    
        if(audio.volume < 0.5 && audio.volume > 0) {
            volume_low.style.display = "inline";
            volume_mute.style.display = "none";
            volume_high.style.display = "none";
        }

        if(audio.volume >= 0.5) {
            volume_high.style.display = "inline";
            volume_mute.style.display = "none";
            volume_low.style.display = "none";
        }
    });

    volumeRange.addEventListener('input', function () {
        audio.volume = volumeRange.value;
        if(audio.volume == 0) {
            volume_mute.style.display = "inline";
            volume_high.style.display = "none";
        }
    
        if(audio.volume < 0.5 && audio.volume > 0) {
            volume_low.style.display = "inline";
            volume_mute.style.display = "none";
            volume_high.style.display = "none";
        }

        if(audio.volume >= 0.5) {
            volume_high.style.display = "inline";
            volume_mute.style.display = "none";
            volume_low.style.display = "none";
        }
    });

});

document.addEventListener('DOMContentLoaded', function () {
    audio.addEventListener('loadedmetadata', function () {
        progress_right.innerHTML = `${formatTime(audio.duration)}`;
        updateProgressBar();
    });
})
setInterval(updateProgressBar, 500);



progress_bar.addEventListener('click', function (event) {
    const totalWidth = this.clientWidth;
    const clickX = event.clientX - this.getBoundingClientRect().left;
    const duration = audio.duration;

    const newTime = (clickX / totalWidth) * duration;

    audio.currentTime = newTime;

    updateProgressBar();
});

audio.addEventListener('timeupdate', function () {
    updateProgressBar();
});








