class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 0;
    }

    getMusic() {
        return this.musicList[this.index];
    }

    next() {
        if(this.index < this.musicList.length - 1) {
            this.index++;
        }
        else {
            this.index = 0;
        }
    }

    previous() {
        if(this.index > 0) {
            this.index--;
        }
        else {
            this.index = this.musicList.length - 1;
        }
    }
}

function displayMusic() {
    let imgElement = `<img src="${music.img}" class="img-fluid rounded-start">`;
    image.innerHTML = imgElement;

    let songElement = `${music.song}`;
    song.innerHTML = songElement;

    let artistElement = `${music.artist}`;
    artist.innerHTML = artistElement;

    audio.src = `${music.audio}`
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateProgressBar() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    // Update progress bar width
    const progressWidth = (currentTime / duration) * 100;
    progress_bar.style.width = `${progressWidth}%`;

    // Update progress left text
    progress_left.innerHTML = `${formatTime(currentTime)}`;
}
