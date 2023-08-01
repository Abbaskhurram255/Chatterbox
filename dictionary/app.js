const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const input = document.querySelector("input");
const result = document.getElementById('result');
const sound = document.getElementById('sound');
const btn = document.getElementById('search-btn');
window.$ = function(selector) {
  return document.querySelector(selector);
}

$("input").addEventListener("keydown", function (e) {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      btn.click();
      }
});

const isOdd = number => {
	let res = number % 2 != 0;
	return res;
}

btn.addEventListener('click', () => {
    let inpWord = document.getElementById('inp-word').value;
    fetch(`${url}${inpWord}`)
        .then(response => response.json())
        .then(data => {
            console.log(`Definitions found: ${data[0].meanings[0].definitions.length}`);
            result.innerHTML = `
            <div class="word">
            <h3>${inpWord}</h3>
            <button onclick="playSound()"><img src="volume-high-solid.png" alt="pronunciation"
                class="volume" ></button>
            </div>
                <div class="details">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>${data[0].phonetic}</p>
                </div>
                <p class="word-meaning">`;
                /*for (let x = 0; x < data[0].meanings.length; x++) {*/
                	for (let y = 0; y < data[0].meanings[0].definitions.length; y++) {
                	result.innerHTML += `${data[0].meanings[0].definitions[y].definition}<br />`;
                if (isOdd(y)) result.innerHTML += '<br />';
                /*}*/
                }
                result.innerHTML += `</p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].
                    example || ""}
                </p>
                 <p class="word-example">`;
                 for (let num = 0; num < data[0].meanings[0].synonyms.length; ++num) {
                 	result.innerHTML += `<strong style="font-size:20px;color:green">:</strong> <span style="color: blue; text-decoration: underline;" id="synClick" onclick="document.querySelector('input').value=document.querySelectorAll('#synClick')[${num}].innerText; document.querySelector('#search-btn').click();">${data[0].meanings[0].synonyms[num] || ""}</span><br />`;
                 }
                    result.innerHTML += 
                `</p>`;
            sound.src = data[0].phonetics[0].audio;
        })
        .catch(e => {
        	console.log("Error: " + e);
        if (/undefined/i.test(e)) {
            result.innerHTML = "<h3 class= 'error'>Couldn't Find That Word, <span id='blink'>Sorry!</span><h3>";
            }
        })
    })

    function playSound() {
        sound.play();
    }
    
/* startup input value provided as an example */
document.body.onload = () => {
	const exampleValue = () => {
		let newInitialValue = "Babe";
		input.value = newInitialValue;
		btn.click();
		input.value = "Babe - Example";
		window.setTimeout(hideNow, 5000); 
	}
	
	let hideNow = () => {
		input.value = "";
	}
	
    window.setTimeout(exampleValue, 10000); 
}



function RandomObjectMover(obj, container) {
	this.$object = obj;
  this.$container = container;
  this.container_is_window = container === window;
  this.pixels_per_second = 250/4;
  this.current_position = { x: 0, y: 0 };
  this.is_running = false;
}

// Set the speed of movement in Pixels per Second.
RandomObjectMover.prototype.setSpeed = function(pxPerSec) {
	this.pixels_per_second = pxPerSec;
}

RandomObjectMover.prototype._getContainerDimensions = function() {
   if (this.$container === window) {
       return { 'height' : this.$container.innerHeight, 'width' : this.$container.innerWidth };
   } else {
   	   return { 'height' : this.$container.clientHeight, 'width' : this.$container.clientWidth };
   }
}

RandomObjectMover.prototype._generateNewPosition = function() {

	// Get container dimensions minus div size
  var containerSize = this._getContainerDimensions();
	var availableHeight = containerSize.height - this.$object.clientHeight;
  var availableWidth = containerSize.width - this.$object.clientHeight;
    
  // Pick a random place in the space
  var y = Math.floor(Math.random() * availableHeight);
  var x = Math.floor(Math.random() * availableWidth);
    
  return { x: x, y: y };    
}

RandomObjectMover.prototype._calcDelta = function(a, b) {
	var dx   = a.x - b.x;         
  var dy   = a.y - b.y;         
  var dist = Math.sqrt( dx*dx + dy*dy ); 
  return dist;
}

RandomObjectMover.prototype._moveOnce = function() {
		// Pick a new spot on the page
    var next = this._generateNewPosition();
    
    // How far do we have to move?
    var delta = this._calcDelta(this.current_position, next);
    
		// Speed of this transition, rounded to 2DP
		var speed = Math.round((delta / this.pixels_per_second) * 100) / 100;
    
    //console.log(this.current_position, next, delta, speed);
          
    this.$object.style.transition='transform '+speed+'s linear';
    this.$object.style.transform='translate3d('+next.x+'px, '+next.y+'px, 0)';
    
    // Save this new position ready for the next call.
    this.current_position = next;
  
};

RandomObjectMover.prototype.start = function() {

	if (this.is_running) {
  	return;
  }

	// Make sure our object has the right css set
  this.$object.willChange = 'transform';
  this.$object.pointerEvents = 'auto';
	
  this.boundEvent = this._moveOnce.bind(this)
  
  // Bind callback to keep things moving
  this.$object.addEventListener('transitionend', this.boundEvent);
  
  // Start it moving
  this._moveOnce();
  
  this.is_running = true;
}

RandomObjectMover.prototype.stop = function() {

	if (!this.is_running) {
  	return;
  }
  
  this.$object.removeEventListener('transitionend', this.boundEvent);
  
	this.is_running = false;
}


// Init it
var x = new RandomObjectMover(document.getElementById('fly'), window);

// start
x.start();


setInterval(()=> x.stop(), 5000);
if (!this.is_running) {
  	setInterval(()=> x.start(), 15000);
  }
  
  
  document.getElementById('fly').addEventListener("click", function() {
  	let arr = ["aray paagal, mat chu'oh mujhay!", "kabhi tit'lee nahi dekhi kyaa?", "Haath mat lagaana, kaat dalu gi", "aray bayv'koof. Kabhi tit'lee nahi dekhi kyaa tum ne, huh, huh, huh-huh?", "oof. ayesha ne mujhe iss application may daal kar badi galati kar di. Par usay bhi kaha pata tha kay tum jesa bayv'koof mujhe chheday gaa. grr"];
  let pitch = [1.0, 1.1, 1.2];
  	playText(arr[Math.floor(Math.random() * arr.length)], pitch[Math.floor(Math.random() * pitch.length)]);
  	setInterval(()=> x.start(), 100);
      setInterval(()=> x.stop(), 5000);
      if (!this.is_running) {
  	setInterval(()=> x.start(), 15000);
  }
  });
  
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
  /* or you could simply import say.js. The link to it: https://rawit.com/JudahRR/Say.js/master/libs/say.js */
}

//Call this function to (immediately) stop the Speech synthesis:
function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
//end of Speech_Synth block