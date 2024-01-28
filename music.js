class Music {
    constructor(song, artist, img, audio) {
        this.song = song;
        this.artist = artist;
        this.img = img;
        this.audio = audio;
    }

    getName() {
        return this.song + " - " + this.artist;
    }
}

const musicList = [
    new Music("Yalnız Adam", "Khontkar", "img/yalnız-adam.png", "mp3/yalnız-adam.mp3"),
    new Music("Günden Güne", "Motive", "img/gunden-gune.png", "mp3/gunden-gune.mp3"),
    new Music("25", "Ati242", "img/25.png", "mp3/25.mp3"),
];

