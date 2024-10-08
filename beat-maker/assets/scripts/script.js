class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playButton = document.querySelector(".play");
    this.muteButtons = document.querySelectorAll(".mute");
    this.resetButton = document.querySelector(".reset");

    this.currentKick = `./assets/sounds/kick-gritty.wav`;
    this.currentSnare = `./assets/sounds/snare-big.wav`;
    this.currentHihat = `./assets/sounds/hihat-reso.wav`;
    this.currentopenhat = `./assets/sounds/openhat-808.wav`;
    this.currentClap = `./assets/sounds/clap-crushed.wav`;
    this.currentPerc = `./assets/sounds/Perc 5.wav`;
    this.currentTom = `./assets/sounds/tom-chiptune.wav`;
    
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.openhatAudio = document.querySelector(".openhat-sound");
    this.clapAudio = document.querySelector(".clap-sound");
    this.percAudio = document.querySelector(".perc-sound");
    this.tomAudio = document.querySelector(".tom-sound");
    this.selects = document.querySelectorAll("select");

    this.tempoSlider = document.querySelector(".tempo-slider");
    this.tempoNumber = document.querySelector(".tempo-number");

    this.index = 0;
    this.bpm = 150;
  }

  start() {
    const interval = (60 / this.bpm) * 1000;
    if (this.isPlaying) {
      clearInterval(this.isPlaying);
      this.index = 0;
      this.isPlaying = null;
    } else {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
    }
  }

  repeat() {
    let step = this.index % 16;
    const activePad = document.querySelectorAll(`.b${step}`);
    activePad.forEach((pad) => {
      pad.style.animation = "play-track 0.3s alternate ease-in-out 2";
      pad.style = "-webkit-animation: play-track 0.3s alternate ease-in-out 2";
      if (pad.classList.contains("active")) {
        if (pad.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (pad.classList.contains("snare-pad")) {
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (pad.classList.contains("hihat-pad")) {
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
        if (pad.classList.contains("clap-pad")) {
          this.clapAudio.currentTime = 0;
          this.clapAudio.play();
        }
        if (pad.classList.contains("openhat-pad")) {
          this.openhatAudio.currentTime = 0;
          this.openhatAudio.play();
        }
        if (pad.classList.contains("perc-pad")) {
          this.percAudio.currentTime = 0;
          this.percAudio.play();
        }
        if (pad.classList.contains("tom-pad")) {
          this.tomAudio.currentTime = 0;
          this.tomAudio.play();
        }
      }
    });
    this.index++;
  }

  mute(e) {
    const trackName = e.target.getAttribute("data-track");
    e.target.classList.toggle("active");

    if (e.target.classList.contains("active")) {
      e.target.innerHTML = '<i class="fas fa-volume-mute"></i>';

      switch (trackName) {
        case "kick":
          this.kickAudio.volume = 0;
          break;
        case "snare":
          this.snareAudio.volume = 0;
          break;
        case "hihat":
          this.hihatAudio.volume = 0;
         case "openhat":
          this.openhatAudio.volume = 0;
        case "clap":
          this.clapAudio.volume = 0;
        case "perc":
          this.percAudio.volume = 0;
        case "tom":
          this.tomAudio.volume = 0;
          break;

        default:
          console.error("something went wrong :(");
          break;
      }
    } else {
      e.target.innerHTML = '<i class="fas fa-volume-up"></i>';

      switch (trackName) {
        case "kick":
          this.kickAudio.volume = 1;
          break;
        case "snare":
          this.snareAudio.volume = 1;
          break;
        case "hihat":
          this.hihatAudio.volume = 1;
        case "openhat":
          this.openhatAudio.volume = 1;
        case "clap":
          this.clapAudio.volume = 1;
        case "perc":
          this.percAudio.volume = 1;
        case "tom":
          this.tomAudio.volume = 1;
          break;

        default:
          console.error("something went wrong:(");
          break;
      }
    }
  }

  reset() {
    this.pads.forEach((e) => {
      if (e.classList.contains("active")) {
        e.classList.remove("active");
      }
    });
  }

  activePad() {
    this.classList.toggle("active");
  }

  updatePlayButton() {
    if (!this.isPlaying) {
      this.playButton.innerHTML = `<i class="fas fa-stop"></i>`;
      this.playButton.classList.add("active");
    } else {
      this.playButton.innerHTML = `<i class="fas fa-play"></i>`;
      this.playButton.classList.remove("active");
    }
  }

  updateSound(e) {
    const selectionName = e.target.name;
    const selectionValue = e.target.value;
    switch (selectionName) {
      case "kick-select":
        this.kickAudio.src = selectionValue;
        break;

      case "snare-select":
        this.snareAudio.src = selectionValue;
        break;

      case "hihat-select":
        this.hihatAudio.src = selectionValue;
        break;
        
        case "openhat-select":
        this.openhatAudio.src = selectionValue;
        break;
        
        case "clap-select":
        this.clapAudio.src = selectionValue;
        break;
        
      case "perc-select":
        this.percAudio.src = selectionValue;
        break;
        
      case "tom-select":
        this.tomAudio.src = selectionValue;
        break;

      default:
        console.error("something went wrong :(");
        break;
    }
  }

  changeTempo(e) {
    this.bpm = e.target.value;
    this.tempoNumber.innerHTML = e.target.value;
  }

  updateTempo() {
    clearInterval(this.isPlaying);
    this.isPlaying = null;

    if (this.playButton.classList.contains("active")) {
      this.start();
    }
  }
}

const drumKit = new DrumKit();

// event listener

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
    this.style = "-webkit-animation: \"\"";
  });
});

drumKit.playButton.addEventListener("click", () => {
  drumKit.updatePlayButton();
  drumKit.start();
});

drumKit.resetButton.addEventListener("click", () => {
  drumKit.reset();
});

drumKit.selects.forEach((select) => {
  select.addEventListener("change", (e) => {
    drumKit.updateSound(e);
  });
});

drumKit.muteButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    drumKit.mute(e);
  });
});

drumKit.tempoSlider.addEventListener("input", (e) => {
  drumKit.changeTempo(e);
});
drumKit.tempoSlider.addEventListener("change", (e) => {
  drumKit.updateTempo();
});
