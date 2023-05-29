import audios from "./musics_data.js";
import { path, secondsToMinutes, shuffle } from "./utils.js";
import elements from "./playerElements.js";

export default {
  audioData: shuffle(audios),
  currentAudio: {},
  currentPlaying: 0,
  isPlaying: true,
  start() {
    elements.get.call(this);
    this.update();
    this.volumeControl.value = 100;
  },
  play() {
    this.isPlaying = true;
    this.audio.play();
    this.playPause.className = "fa fa-pause";
  },
  pause() {
    this.isPlaying = false;
    this.audio.pause();
    this.playPause.className = "fa fa-play";

  },
  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  },
  next() {
    ++this.currentPlaying;

    if (this.currentPlaying === this.audioData.length) {
      this.currentPlaying = 0;
    }
    this.pause();
    this.update();
    this.play();
  },
  back() {
    --this.currentPlaying;

    if (this.currentPlaying === -1) {
      this.currentPlaying = this.audioData.length - 1;
    }

    this.pause();
    this.update();
    this.play();
  },
  toggleMute() {
    this.audio.muted = !this.audio.muted;
    this.volume_icon.className = this.audio.muted ? "fa fa-volume-off" : "fa fa-volume-up";
  },
  setVolume(value) {
    this.audio.volume = value / 100;
  },
  setSeekbar(value) {
    this.audio.currentTime = value;
  },
  timeUpdate() {
    this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
    this.seekbar.value = this.audio.currentTime;
  },
  update() {
    this.currentAudio = this.audioData[this.currentPlaying];

    this.title.innerHTML = this.currentAudio.title;
    // this.artist.innerHTML = this.currentAudio.artist;
    this.artist.innerHTML = "";

    elements.createAudioElement.call(this, path(this.currentAudio.file));

    this.audio.onloadeddata = () => {
      elements.actions.call(this);
    };
  },
};