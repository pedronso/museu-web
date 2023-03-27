import { secondsToMinutes } from "./utils.js";

export default {
  get() {
    this.title = document.querySelector(".card-content h5");
    this.artist = document.querySelector(".artist");
    this.playPause_icon = document.querySelector("#play-pause-button");
    this.playPause = document.querySelector("#play-pause");
    this.nextTrack = document.querySelector("#next-track");
    this.previousTrack = document.querySelector("#previous-track");
    this.volume = document.querySelector("#mute_button");
    this.volume_icon = document.querySelector("#volume-icon");
    this.volumeControl = document.querySelector("#volume-control");
    this.seekbar = document.querySelector("#seekbar");
    this.currentDuration = document.querySelector("#current-duration");
    this.totalDuration = document.querySelector("#total-duration");
  },
  createAudioElement(audio) {
    this.audio = new Audio(audio);
  },
  actions() {
    this.playPause_icon.onclick = () => this.togglePlayPause();
    this.audio.onended = () => this.next();

    this.volume.onclick = () => this.toggleMute();
    this.volumeControl.oninput = () => this.setVolume(this.volumeControl.value);
    this.volumeControl.onchange = () =>
      this.setVolume(this.volumeControl.value);

    this.seekbar.oninput = () => this.setSeekbar(this.seekbar.value);
    this.seekbar.onchange = () => this.setSeekbar(this.seekbar.value);

    this.seekbar.max = this.audio.duration;
    this.totalDuration.innerText = secondsToMinutes(this.audio.duration);

    this.audio.ontimeupdate = () => this.timeUpdate();

    this.nextTrack.onclick = () => this.next();
    this.previousTrack.onclick = () => this.back();
  },
};