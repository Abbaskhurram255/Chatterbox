const mySelfMadeEDM = [
  {src: "xyz.mp3", name: "", group: "", year:"", cover: ""},
  {src: "foo.mp3", name: "", group: "", year:"", cover: ""},
  {src: "bar.mp3", name: "", group: "", year:"", cover: ""},
];

let audio = new Audio();

const playRandomFile = () => {
  audio.src = mySelfMadeEDM[~~(Math.random() * mySelfMadeEDM.length)].src;
  audio.volume = 0.3;
  audio.play();
};

audio.addEventListener("ended", playRandomFile);