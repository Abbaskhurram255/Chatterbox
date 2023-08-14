const mySelfMadeEDM = [
  {src: "xyz.mp3", name: "", group: "", year:"", cover: ""},
  {src: "foo.mp3", name: "", group: "", year:"", cover: ""},
  {src: "bar.mp3", name: "", group: "", year:"", cover: ""},
];

let bgAmbience = new Audio();

const playRandomFile = () => {
  bgAmbience.src = mySelfMadeEDM[~~(Math.random() * mySelfMadeEDM.length)].src;
  bgAmbience.volume = 0.3;
  bgAmbience.play();
};

bgAmbience.addEventListener("ended", playRandomFile);