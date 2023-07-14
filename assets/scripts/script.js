
const $snack = $("#snackbar");

/* load default (light) theme every time the window (aka body object (DOM document.body) loads) nd show a tooltip whenever searchInput is active. Run startTime function too */


window.onload = () => {
  startTime();
  /*
  $lTheme.attr("media", "");
  $dTheme.attr("media", "none");
  islTh = true;
  isdTh = false;
  */
  //check if jQuery has finished loading every time the window loads
  if (jQuery) {
    log("JQuery loaded successfully!");
  } else {
    log("Failed to load JQuery :(");
  }
  //adding a tooltop on the input as soon as the window finishes loading
  const tippy1 = document.querySelector("#searchInput");
  tippy(tippy1, {
    content: "Mujh se pucho batane ke lie ke <strong onclick=\"document.querySelector('#searchInput').value = this.innerText;\" onmouseover=\"$(this).css('cursor', 'pointer');\">mosam kesa he?</strong> Ya pucho <strong onclick=\"$('#searchInput').val($(this).text());\" onmouseover=\"$(this).css('cursor', 'pointer')\">calendar</strong> kholne ke lie, ya pucho latest <strong onclick=\"$('#searchInput').val($(this).text())\" onmouseover=\"$(this).css('cursor', 'pointer')\">currency rates</strong> batane ke lie, sab karugi me!",
    followCursor: "horizontal",
    interactive: true /* To add interactions to and make your tippy's text highlight-able and clickable*/ ,
    appendTo: document.body,
    animation: "scale",
    duration: 1200,
    theme: "translucent",
    allowHTML: true,
    arrow: true,
    maxWidth: 370,
  });

  // Run ASK function whenever the user presses return (enter) key when they are done typing the query
  $("#searchInput").keydown(function (e) {
    const code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
      ask();
      if (mesg.innerText != "") {
        if (speechSynthesis.speaking) {
          stopText();
        }
        playText(mesg.innerText);
        //Show a snackbar the first time the Speech Synthesis reads this text
        	$snack.text("Speech synthesis is ongoing. You cannot enter any text in the input field until it finishes.");
            $snack.addClass("show");
        setTimeout(function () {
        	  $snack.removeClass("show");
        }, 2300);
      }
    }
  });
  setTimeout(daystilXmas, 3000);
  setTimeout(daystilNYE, 12000);
  setTimeout(daystilNYD, 25000);
  $("#message").slideFadeToggle(5);
  $(".stagger-menu").slideFadeToggle(5);
  $(".menu-toggler-label").click(function () {
    $(".stagger-menu").slideFadeToggle(120);
  });
}; //end block of window.onload method

$(document).ready(function () {
  //JQuery onload functions go here
  $("#recIcon").click(() => {
  	$("#recIcon").addClass("mikeAnim");
  })
});
/* To remind you that the variable holds a jQuery selection, use $(varName) method to declare it. Plain JavaScript's method of variable declarations also work tho */

// SOME USEFUL FUNCTIONS

//Speech recognition func

// let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
  // See if speech recognition API is supported
  let SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognition = new SpeechRecognition();
  log("Speech recognition is supported by your browser!");
  var noteTextarea = $("#searchInput");
  var instructions = $("#message");

  var noteContent = "";

  recognition.continuous = false;

  // This block is called every time the Speech APi captures a line.
  recognition.onresult = function (event) {
    let current = event.resultIndex;

    // Get a transcript of what was said.
    var transcript = event.results[current][0].transcript;

    var mobileRepeatBug =
      current == 1 && transcript == event.results[0][0].transcript;

    if (mobileRepeatBug == false) {
  	$("#recIcon").removeClass("mikeAnim");
      noteContent = transcript;
      noteTextarea.val(noteContent);
      ask();
      if (mesg.innerText != "") {
        if (speechSynthesis.speaking) {
          stopText();
        }
        playText(mesg.innerText);
      }
    }
  };

  recognition.onerror = function (event) {
    if (/no speech/mi.test(event.error)) {
      	$snack.text("No speech was detected, please try again");
          $snack.addClass("show");
        setTimeout(function () {
          $snack.removeClass("show");
        }, 2300);
      stopText();
      playText("Samjhi nahi, zaraa dubaara boli'ay");
    	$("#recIcon").removeClass("mikeAnim");
    return ;
    }
  };
  
  recognition.onend = () => {
  	log('Speech recognition service disconnected.');
      $("#recIcon").removeClass("mikeAnim");
      $("#askBtn").click();
  }

  $("#recIcon").on("click", function () {
  	//play sound here: add the lines, you know what to do
    stopText();
    recognition.start();
  });

  /* Sync the text inside the text area with the noteContent variable.*/
  noteTextarea.on("input", function () {
    noteContent = $(this).val();
  });
} else {
  let err =
    "Unfortunately, Speech Recognition is not supported by your browser. The microphone function won't work :(";
  log(err);
  alert(err);
}

//JQuery function that makes it easy to toggle a slide w fade animation
$.fn.slideFadeToggle = function (speed, easing, callback) {
  return this.animate({
      opacity: "toggle",
      height: "toggle",
    },
    speed,
    easing,
    callback
  );
};

const isBday = function (dat) {
  let inputDate = new Date(dat);
  let todaysDate = new Date();
  todaysDate.setHours(0, 0, 0, 0);
  todaysDate.setYear(0);
  
  inputDate.setYear(0);
  return inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0) && inputDate.valueOf() == todaysDate.valueOf();
};

// function that checks to see if it (or the query) a leap year
function isLeapYear(year) {
  return new Date(parseInt(year), 1, 29).getMonth() == 1;
}

//fn that calculates the dayOfYear
const dayOfYear = (date) => {
  return Math.floor(
    (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24
  );
};
//fn that tests if it's weekday today and returns boolean value as a result
const isWeekday = (d = new Date()) => {
  return d.getDay() % 6 !== 0;
};

//fn that tests if it's weekend today and returns boolean value as a result
const isWeekend = (d = new Date()) => {
  return d.getDay() % 6 === 0;
};

//fn toRomanNumeral
const toRomanNumeral = (num) => {
  let lookup = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  return lookup.reduce((acc, [k, v]) => {
    acc += k.repeat(Math.floor(num / v));
    num = num % v;
    return acc;
  }, "");
};

const milesToKm = (miles) => {
  return miles * 1.609344;
};

const kmToMiles = (km) => {
  return km * 0.621371;
};

const yesterday = () => {
  let d = new Date();
  d.setDate(d.getDate() - 1);
  let res = d.toString().split(" G")[0];
  res = res.slice(0, 15);
  return `Kal tareekh rahi ${res}`;
};

const tomorrow = () => {
  let d = new Date();
  d.setDate(d.getDate() + 1);
  let res = d.toString().split(" G")[0];
  res = res.slice(0, 15);
  return `Kal ki date or din rahay gay ${res}`;
};

const detectDeviceType = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) ?
    "Mobile" :
    "Desktop";
};

const daystilXmas = () => {
  let tday = new Date();
  var cmas = new Date(tday.getFullYear(), 11, 25);
  if (tday.getMonth() == 11 && tday.getDate() >= 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
  }
  let oneDay = 1000 * 60 * 60 * 24;
  let rslt = Math.ceil((cmas.getTime() - tday.getTime()) / oneDay);
  if (rslt == 0 || rslt == 365) {
    /*show a snack here saying "Merry Christmas!"...*/
    $snack.text("Merry Christmas!");
    $snack.addClass("show");
    setTimeout(function () {
      $snack.removeClass("show");
    }, 4000);
  } else if (rslt == 1) {
    $snack.text("Reminder: Kal Christmas hay!");
    $snack.addClass("show");
    setTimeout(function () {
      $snack.removeClass("show");
    }, 4000);
  } else if (rslt < 7 && rslt != 0 && rslt != 1) {
    $snack.text(`Reminder: Only ${rslt} days left until Christmas!`);
    $snack.addClass("show");
    setTimeout(function () {
      $snack.removeClass("show");
    }, 4000);
  }
};

const daystilNYE = () => {
  var nextNewYear, msPerDay;
  let curYr = new Date().getFullYear();
  let today = new Date();
  nextNewYear = new Date("January 1, 2000 00:00:00");
  nextNewYear.setYear(curYr + 1);
  msPerDay = 24 * 60 * 60 * 1000;
  const noofdayslefttilNYE = Math.floor(
    (nextNewYear.getTime() - today.getTime()) / msPerDay
  );
  if (noofdayslefttilNYE == 0 || noofdayslefttilNYE == 365) {
    /*show a snack here saying "Happy New Year's Eve!"...*/
    $snack.text("Happy New Year's Eve!");
    $snack.addClass("show");
    setTimeout(function () {
      $snack.removeClass("show");
    }, 4000);
  } else if (noofdayslefttilNYE == 1) {
    $snack.text("Reminder: Kal New Year ki sham he!");
    $snack.addClass("show");
    setTimeout(function () {
      $snack.removeClass("show");
    }, 4000);
  } else if (
    noofdayslefttilNYE < 7 &&
    noofdayslefttilNYE != 0 &&
    noofdayslefttilNYE != 1
  ) {
    $snack.text(`Reminder: Sirf ${noofdayslefttilNYE} din reh gae New Year ki sham me!`);
    $snack.addClass("show");
    setTimeout(function () {
      $snack.removeClass("show");
    }, 4000);
  }
};

const daystilNYD = () => {
  let nextNewYearsDay, msPerDay;
  let currentYr = new Date().getFullYear();
  let today = new Date();
  nextNewYearsDay = new Date("January 1, 2000 00:00:00");
  nextNewYearsDay.setYear(currentYr + 1);
  msPerDay = 24 * 60 * 60 * 1000;
  const noofdayslefttilNYD = Math.ceil(
    (nextNewYearsDay.getTime() - today.getTime()) / msPerDay
  );
  if (noofdayslefttilNYD == 0 || noofdayslefttilNYD == 365) {
    /*show a snack here saying "Happy New Year's Day!"...*/
    $snack.text("Happy New Year's Day!");
    $snack.addClass("show");
    setTimeout(function () {
      $snack.removeClass("show");
    }, 4000);
  } else if (noofdayslefttilNYD == 1) {
    $snack.text("Reminder: It's New Year's Day tomorrow!");
    $snack.addClass("show");
    setTimeout(function () {
      $snack.removeClass("show");
    }, 4000);
  }
};

var msg;
const ls = localStorage || window.localStorage;
var userName = ls.getItem("lsuserName") || prompt("Hello ji! Naam jan sakti hu me apka? Apparently, ap ek first time user hen!");
userName = toTitleCase(userName); 
if (
    userName != null &&
    userName.length >= 3 &&
    /^[a-z\s]+$/i.test(userName) &&
    userName != ""
  ) {
      ls.setItem("lsuserName", userName);
      }
var age;
var bday;
if (ls.getItem("lsbday") == null) {
	bday = prompt(
  "Birthday jan sakti hu me apki? Note: Me birthday sirf apki umr ka hisab lagane ke lie puchti hu, or is lie bhi take me apko apki salgira wale din 'Happy birthday' bol saku.\nAccepted format *: YYYY(separator)m(separator)d"
);
    if ( 
       bday != null && 
       /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
       bday != "" && 
       /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
         bday 
       ) 
     ) { 
     	ls.setItem("lsbday", bday);
    }
} else {
	if ( 
       ls.getItem("lsbday") != null && 
       /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(ls.getItem("lsbday")) && 
       ls.getItem("lsbday") != "" && 
       /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
         ls.getItem("lsbday") 
       ) 
     ) { 
     	bday = ls.getItem("lsbday");
	}
}

//Show a snackbar if it's user's birthday today
bday = toTitleCase(bday);
if (isBday(bday)) {
  $snack.text("Happy birthday");
  if (
    userName != null &&
    userName.length >= 3 &&
    /^[a-z\s]+$/i.test(userName) &&
    userName != ""
  ) {
    $snack.append(`, ${userName}! `);
  } else {
    $snack.append("! ");
  }
  log("Snack text: " + $snack.text());
  $snack.addClass("show");
  setTimeout(function () {
    $snack.removeClass("show");
  }, 5000);
}
if (
  userName != null &&
  userName.length >= 3 &&
  /^[a-z\s]+$/i.test(userName) &&
  userName != ""
) { 
  if (ls.getItem("lsuserName") == null || ls.getItem("lsbday") == null) {
  	alert(`Welcome, ${userName}!`);
      console.log(`Welcome, ${userName}. This is probably your first time!`);
  } else {
  	alert(`Welcome back, ${userName}!`);
      console.log(`Welcome back. You're definitely not new to this application!`);
  }
} else {
  alert("Welcome, luv!");
  console.log("Welcome, luv!");
}


/* A function that capitalizes first letter of a string, but not each
      function capFirstletter(
      string) {
       return string[0]
       .toUpperCase() + string.slice(
         1);
      }
      */

/* A function that capitalizes each first letter of a phrase (string actually) */
function toTitleCase(phrase) {
  return phrase
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

//age calculator
function calc_age(ag) {
  var diff_ms = Date.now() - ag.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(parseInt(age_dt.getUTCFullYear()) - 1970);
}

//Nicknaming function
const nickName = () => {
  if (
    userName != null &&
    userName.length >= 3 &&
    /^[a-z\s]+$/i.test(userName) &&
    userName != ""
  ) {
    return ", " + userName.slice(0, 4);
  } else {
    return;
  }
};

//Time function:
function startTime() {
  let d = new Date();
  let hr = d.getHours();
  let min = d.getMinutes();
  let sec = d.getSeconds();
  if (min < 10) {
    min = "0" + min;
  }
  let ampm = "am";
  if (hr > 12) {
    hr -= 12;
    ampm = "pm";
  }
  if (hr < 10) {
    hr = "0" + hr;
    if (hr == "00" && ampm == "am") {
    	hr = "12";
    }
  }
  const $time = $("#time");
  msg = `${hr}:<span id="mins">${min}</span><span id="ampm">${ampm}</span>`;
  $time.html(msg);
  setTimeout(startTime, 1000);
  var tickSound = new Audio("assets/audio/tick.mp3");
  tickSound.playbackRate = 2.0;
  if (sec > 54 && sec != 00 && min == 59 && min != 00) {
  	$("#mins").addClass("blink");
      tickSound.play();
  } else {
  	$("#mins").removeClass("blink");
      tickSound.pause();
  }
  if (min == 59 && sec == 59 && sec != 00 && min != 00) {
  	$("#ampm").addClass("blink-2");
  } else {
  	$("#ampm").removeClass("blink-2");
  }
}

// Date function
function dateTime() {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date();
  let day = days[d.getDay()];
  let hr = d.getHours();
  let min = d.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  let ampm = "am";
  if (hr > 12) {
    hr -= 12;
    ampm = "pm";
  }
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let result =
    "Local date and time right now: <br>" +
    day +
    " " +
    hr +
    ":" +
    min +
    ampm +
    " (" +
    seconds_with_leading_zeros(d) +
    ") " +
    month +
    " " +
    date +
    " " +
    year;
  return result;
}



// shortcut to console/ debugger
//start
function log(x) {
  return console.log(x);
}

function debug(x) {
  return console.debug(x);
} //end

// Get User's Timezone
function seconds_with_leading_zeros(d) {
  return /\((.*)\)/.exec(new Date().toString())[1];
}

// Speech Engine section
//start block
const playButton = document.querySelector("#askBtn");
const mesg = document.querySelector("#message");
const textInput = document.querySelector("#searchInput");
let currentCharacter;

if ("speechSynthesis" in window) {
  log("Speech Synthesis is supported!");
  playButton.addEventListener("click", () => {
    if (mesg.innerText != "") {
      if (speechSynthesis.speaking) {
        stopText();
      }
      playText(mesg.innerText);
    }
  });
} else {
  log("Speech Synthesis isn't supported by your browser, sorry :'(");
}

const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener("end", () => {
  textInput.disabled = false;
});
utterance.addEventListener("boundary", (e) => {
  currentCharacter = e.charIndex;
});

function playText(text) {
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
  utterance.pitch = 1;
  utterance.voiceURI = "native";
  utterance.lang = "hi";
  utterance.volume = 1;
  utterance.rate = 1;
  textInput.disabled = true;
  speechSynthesis.speak(utterance);
  /* or you could simply import say.js. The link to it: https://rawit.com/JudahRR/Say.js/master/libs/say.js */
}

//Call this function to (immediately) stop the Speech synthesis:
function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
//end of Speech_Synth block


/* Modal */
const modal = document.getElementById("myModal");
let closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function () {
  modal.style.display = "none";
  stopText();
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    stopText();
  }
};

const showFeatures = () => {
  modal.style.display = "block";
  stopText();
  msg =
    "Mujhay kam naa samjho, Math tak kar sakti hoo may. Maslan, if you asked me to inform you whether 2020 or 2021 were a leap year, I'd let you know. And if you asked me to inform you of the date it is going to be tomorrow or the date it was yesterday lol, I'd let you know. What's more, if you asked me to inform you whether it is a weekday today or the weekend yet, I'd let you know. Aaj saal ka kaunsa din hay yay tak bata sakti hu may";
  playText(msg);
  let aBugFix = () => {
    return (textInput.disabled = !true);
  };
  setTimeout(aBugFix(), 2000);
};
//end block of modal fn

const showLicense = () => {
  let showLicWin = window.open("./License/", "_blank");
  if (showLicWin) {
    window.focus();
    log("The license file was just revealed.");
  } else {
    alert("Please enable popups for this site!");
  }
  stopText();
  let aBugFix = () => {
    return (textInput.disabled = !true);
  };
  setTimeout(aBugFix(), 2000);
  return;
};

const showPortfolio = () => {
  let showPortfolioWin = window.open("../", "_blank");
  if (showPortfolioWin) {
    window.focus();
    log("Sent user to the portfolio page");
  } else {
    alert("Please enable popups for this site!");
  }
  stopText();
  let aBugFix = () => {
    return (textInput.disabled = !true);
  };
  setTimeout(aBugFix(), 2000);
  return;
};

$(document).bind("mouseleave", function (e) {
  if (e.pageY - $(window).scrollTop() <= 1) {
    stopText();
  }
});

/* SFX Handler */
const sound = (src, delay = 10000, format = "mp3", speed = 1.0) => {
	let audio = new Audio();
	audio.playbackRate = speed;
	let dir = "assets/audio";
	let regex = /.(mp3|wav|ogg)$/i;
	let formatFound;
	if (regex.test(src)) {
		//format found, saving for later!
		formatFound = src.match(regex)[0];
		log("Saved for later! Now let's just wipe it for now... so that we have a better structure.");
		src = src.replace(regex, "");
		log(src);
		/* optionally, the above statement--- ie the second last statement--- could be <em>replaced</em> with these three lines:
		src = src.replace(".mp3", "");
        src = src.replace(".wav", "");
		src = src.replace(".ogg", "");
        */
	}
	if (formatFound != "" && regex.test(formatFound)) {
		//Since the format was already provided in the parameters, it will be used on behalf of the default format --- that is, *.mp3!
		audio.src = `${dir}/${src}${formatFound}`;
		log("\nPlaying Audio");
		log(`Filename: ${src}${formatFound}`);
		log("Full Address: " + audio.src);
		log("Format found, didn't need to replace it with the default format, i.e. *.mp3!");
	} else {
		//format not found, *.mp3 will be added automatically 
		if (format == null || format == undefined || format == "" || format == 0) {
			format = this.format || "mp3"; 
		}
		audio.src = `${dir}/${src}.${format}`;
		log("\nPlaying Audio");
		log(`Filename: ${src}.${format}`);
		log("Full Address: " + audio.src);
		log("Format not found, so one was added automatically (*.mp3)");
	}
     utterance.onend = function () { 
     audio.play();
     }
     if (delay == null || delay == undefined || delay == "" || delay == 0) {
			delay = this.delay || 10000;
		}
     setTimeout(() => { utterance.onend = ""; }, delay); 
}




/* Function for switching Themes



var lTheme, dTheme, islTh, isdTh, snack, $Theme, $dTheme;
$lTheme = $(".lightTh");
$dTheme = $(".darkTh");
let snack = document.querySelector("#snackbar");
function switchTheme() {
  if (islTh && !isdTh) {
    $lTheme.attr("media", "none");
    $dTheme.attr("media", "");
    islTh = false;
    isdTh = !islTh;
    
    
   
    
    
    snack.innerText = "Switched to Dark theme";
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
    }, 3000);
    console.log("Switched to Dark Theme");
  } else if (isdTh && !islTh) {
    $lTheme.attr("media", "");
    $dTheme.attr("media", "none");
    isdTh = false;
    islTh = !isdTh;
    
    
    
    snack = document.querySelector("#snackbar");
    snack.innerText = "Switched to Light Theme";
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
    }, 3000);
    console.log("Switched to Light Theme");
  }
}

theme switcher end block */


// function greet() {
//   stopText();
//   let m = `Hi ${userName.slice(0, 4)}, kese khidmat kar sakti hu me apki?`;
//   msg =
//     `Hi ${userName.slice(0, 4)}, kese khidmat kar sakti hu me apki?`;
//   playText(msg);
//   let aBugFix = () => {
//     return (textInput.disabled = !true);
//   };
//   setTimeout(aBugFix(), 2000);
//   return
// }
// setTimeout(greet, 3000);