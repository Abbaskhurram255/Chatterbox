// Speech
const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener("boundary", (e) => {
  currentCharacter = e.charIndex;
});

function playText(text, pitch = 1.0) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }
  if (speechSynthesis.speaking) return;
  utterance.text = text;
  var voices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = function () {
    voices = window.speechSynthesis.getVoices();
  };
  utterance.voice = voices[10];
  utterance.pitch = pitch;
  utterance.voiceURI = "native";
  utterance.lang = "hi";
  utterance.volume = 1;
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
}

//Call this function to (immediately) stop the Speech synthesis:
function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
//end of Speech_Synth block



const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

// List of words for game
const words = [
  'sigh',
  'intense',
  'pregnancy',
  'child labor',
  'period',
  'menstruation',
  'breast augmentation',
  'lip fillers',
  'lipstick',
  'earrings',
  'jewellery',
  'hearrings',
  'eye liner',
  'lip liner',
  'bad',
  'no way',
  'dependent',
  'steering wheel',
  'goldenrod',
  'silver',
  'purple',
  'orchid',
  'hotpink',
  'deeppink',
  'yellowish',
  'orangish',
  'peachy',
  'liable',
  'liability',
  'reliance',
  'lovable',
  'adorable',
  'cute',
  'charming',
  'highly attractive',
  'hot',
  'horny',
  'adultery',
  'vaginal',
  'transparency',
  'translucent',
  'hallucinations',
  'combination',
  'illusion',
  'highfalutin',
  'superficial',
  'laalchi',
  'princess',
  'queen',
  'duchess',
  'prince',
  'king',
  'Unites States',
  'Romania',
  'French',
  'German',
  'Russian',
  'riksha',
  'rakshaa bandhan',
  'eid',
  'oops, sorry',
  'bait',
  'shikaar',
  'feeble',
  'admit',
  'orgasm',
  'loving',
  'high as fuck',
  'drugged',
  'fuzzy',
  'dizzy',
  'biker',
  'wheels',
  'generator',
  'preoccupied',
  'enormous',
  'supervision',
  'revision',
  'allowances',
  'royal',
  'regal',
  'heavenly',
  'hindi',
  'artificial intelligence',
  'fragment',
  'pigmentation',
  'decoloration',
  'panties',
  'party balloons',
  'blouses',
  'makeup',
  'dress',
  'lehenga',
  'boyfriend',
  'dopamine',
  'serotonin', 
  'neurochemistry',
  'love chemistry',
  'oxytocin',
  'foundation',
  'false lashes',
  'eyeshadow palette',
  'mascara',
  'blond hair',
  'brunette girl',
  'wig',
  'clitoris',
  'clitoral stimulation',
  'vibrator',
  'BDSM',
  'sadism',
  'sadomasochistic',
  'vaginal penetration',
  'sugar daddy',
  'LGBTQIA2S+',
  'queer',
  'bisexual',
  'asexual',
  'aromantic',
  'lesbian',
  'demiboy',
  'demigirl',
  'bigender',
  'engineer',
  'trampoline',
  'lily',
  'dandelion',
  'freeware',
  'millan',
  'husband & wife',
  'tea',
  'ransomware',
  'malware',
  'spyware',
  'trojan horse',
  'maleficent',
  'malfunctional',
  'encode',
  'decoder',
  'compiler',
  'decompiler',
  'mehnat',
  'maafi',
  'ummeed',
  'aasra',
  'bharwasaa',
  'pyaar ka izhaar',
  'bamboo',
  'baansuri',
  'flute',
  'piano',
  'synthesizer',
  'guitar',
  'sugarcoating',
  'ocean waves ',
  'sea breeze',
  'swimming',
  'surfing',
  'roller skates',
  'rollercoaster',
  'Selena Gomez',
  'Love You Like A Love Song',
  'Taylor Swift',
  'Ellie Goulding',
  'Ryan Gosling',
  'Calvin Harris',
  'gorgeous',
  'elegant',
  'handsome',
  'fascinating',
  'cute',
  'kind',
  'giving',
  'caring',
  'loving',
  'fun to talk to',
  'brilliance',
  'fabulous',
  'fictious',
  'pretentious',
  'pretending',
  'mimicry',
  'fiction',
  'sci-fi',
  'romance',
  'rom-com',
  'marvelous',
  'comical',
  'fancy',
  'fantasy',
  'dreamy',
  'magnificent',
  'breathtakin\'',
  'rockstar',
  'teenager',
  'sugarcane',
  'shanaakht',
  'pehchaan',
  'mangaytar',
  'dushman',
  'ehsaas',
  'shaadi',
  'nikaah',
  'jurm',
  'assault',
  'murder',
  'merderous',
  'sexual assault',
  'marital rape',
  'rape',
  'akaylapan',
  'mehek',
  'gurdbaar',
  'zehmat',
  'taskeen',
  'adlo insaaf',
  'tashreef',
  'tasleem karna',
  'fiance',
  'fiancee',
  'insaaf',
  'equality',
  'herat angez',
  'secrecy',
  'mammary glands',
  'sweat glands',
  'biochemistry',
  'hormones',
  'estrogen',
  'antiandrogens',
  'therapist',
  'vaginoplasty',
  'sex reassignment',
  'music production',
  'indoctrination',
  'coronavirus',
  'vaccination',
  'vulva',
  'urinary tract',
  'telescope',
  'microscopic',
  'acceptance',
  'denial',
  'aggression',
  'regret',
  'museebat',
  'arrogance',
  'obligance',
  'zimma',
  'zimmedaari',
  'pashtaawa',
  'duplication',
  'magic spell',
  'resume',
  'circulation',
  'respiratory',
  'vandalism',
  'havoc',
  'chaos',
  'mishap',
  'tabaahi',
  'nooksaan',
  'prevalence',
  'disaster',
  'deconstruction',
  'loss',
  'death',
  'penalty',
  'jail cell',
  'girl in a coma',
  'khidmat',
  'hospitality',
  'crimson',
  'magenta',
  'darkred',
  'darkgreen',
  'cyan',
  'lightgreen',
  'seagreen',
  'tutti fruiti',
  'assessibility',
  'ease of access',
  'cease to exist',
  'decibels',
  'mazbooti',
  'frequency',
  'rid oneself of',
  'good riddance!',
  'prince of darkness',
  'firefly',
  'android',
  'programming language',
  'hormonal therapy',
  'jhoota',
  'shikaayat',
  'chaahat',
  'muhabbat',
  'chehraa',
  'ghoonghat',
  'chiknaahat',
  'begunaah',
  'typewriter',
  'proofreading',
  'job description',
  'devour',
  'decoy',
  'decorations',
  'contrast',
  'interactivity',
  'idle',
  'HIV',
  'STD',
  'liberation',
  'sublimation',
  'intuition',
  'counterintuitive',
  'claustrophobia',
  'sharmo hayaa',
  'social anxiety',
  'shyness',
  'feminism',
  'ibuprofen',
  'anesthesia',
  'methamphetamine',
  'Adderall',
  'painkillers',
  'SSRIs',
  'SNRIs',
  'antidepressants',
  'ICU nurse',
  'x-ray',
  'ultrasound',
  'contract',
  'counteract',
  'north west',
  'New Nork',
  'Colorado',
  'resignation',
  'expiration',
  'degradation',
  'little by little',
  'kisi ko ghataana',
  'gradually',
  'tragic',
  'khatraa',
  'khatarnaak',
  'kahaawat',
  'akwaal',
  'chaal',
  'maal',
  'ghar',
  'khayaal',
  'karsaaz',
  'majburi',
  'khidmaat',
  'khayalaat',
  'tasawwar',
  'wujoohaat',
  'hevaaniyaat',
  'masroofiyaat',
  'manzooriyaat',
  'dead end',
  'deadline',
  'bardaasht',
  'deep enough',
  'deepening',
  'penetration',
  'distraction',
  'mind blowing',
  'hooker',
  'slut',
  'cunt',
  'jugnu',
  'cunning',
  'beautiful',
  'stunning',
  'mahaarat',
  'kamzori',
  'shehnaaz',
  'aqsa',
  'hafsa',
  'iqra',
  'classroom',
  'angels\' lullaby',
  'hajaab',
  'citrus',
  'sour',
  'delicious',
  'lemonade',
  'luminance',
  'teekhapan',
  'karwaa',
  'meetha',
  'sinister',
  'transition',
  'OCD',
  'ADHD',
  'nonbinary',
  'MTF',
  'FTM',
  'SRS',
  'meeting',
  'applesauce',
  'orange juice',
  'soap',
  'detergent',
  'cutlery',
  'crockery',
  'timeline',
  'kitchen',
  'rubik\'s cube',
  'khof',
  'dardnaak',
  'dharkan',
  'heartbeat',
  'internet trends',
  'meme',
  'queue',
  'lovebirds',
  'love life',
  'Ayushman Khurrana',
];

// Init word
let randomWord;

// Init score
let score = 0;

// Init time
let time = 10;

// Set difficulty to value in ls or medium
let difficulty =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// Set difficulty select value
difficultySelect.value =
  localStorage.getItem('difficulty') !== null
    ? localStorage.getItem('difficulty')
    : 'medium';

// Focus on text on start
text.focus();

// Start counting down
const timeInterval = setInterval(updateTime, 1000);

// Generate random words from the array containing all the words
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
  playText(randomWord);
}

// Update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// Update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + 's';

  if (time == 0) {
    clearInterval(timeInterval);
    // end game
    gameOver();
  }
}

// Game over, show end screen
function gameOver() {
  endgameEl.innerHTML = `
    <h1>You're Out of Time!</h1>
    <p>Your final score is ${score}<br/><span style='color:orange'>Better luck next time!</span></p>
    <button onclick="stopText();location.href='?stupid_user=true';">Reload</button>
  `;
  let comments = ["bas yehi speed he kya? Oho!", "jab ek game ko handle nahi kar paa rahay, tau life ko kese handle karte hoge?", "ab iss se slow bhi koi likhta he kyaa? huh-huh!", "Mujhe ni lagtaa iss say slow bhi koi likhtaa hogaa. Dubaara try karne ki himmat hey to kijye zaraa. Huh-huh!"];
  stopText();
  playText(comments[Math.floor(Math.random() * comments.length)]);

  endgameEl.style.display = 'flex';
}

addWordToDOM();

// Event listeners

// Typing
text.addEventListener('input', e => {
  const insertedText = e.target.value;

  if (insertedText.toLowerCase() == randomWord.toLowerCase()) {
    addWordToDOM();
    updateScore();

    // Clear
    e.target.value = '';

    if (difficulty == 'hard') {
      time += 2;
    } else if (difficulty == 'medium') {
      time += 3;
    } else {
      time += 5; //if it's the easy mode
    }

    updateTime();
  }
});

// Settings btn click
settingsBtn.addEventListener('click', () => settings.classList.toggle('hide'));

// Settings select
settingsForm.addEventListener('change', e => {
  difficulty = e.target.value;
  localStorage.setItem('difficulty', difficulty);
});

//play music on start
document.body.onload = () => {
	const music = new Audio('music.mp3');
	music.volume = 0.5;
	music.autoplay = "autoplay";
	music.loop = "loop";
	music.play();
}
