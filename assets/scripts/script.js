/* load default (light) theme every time the window (aka body object (DOM document.body) loads) nd show a tooltip whenever searchInput is active. Run startTime function too */



window.onload = () => {
  playRandomFile();
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
        //Show a snackbar every time Speech Synthesis reads the text
        let snack = document.querySelector("#snackbar");
        snack.innerText =
          "Speech synthesis is ongoing. You can't enter text in the input field until it finishes reading.";
        snack.className = "show";
        setTimeout(function () {
          snack.className = snack.className.replace("show", "");
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
  	$("#recIcon").css("filter", "brightness(40%)");
  })
});
/* To remind you that the variable holds a jQuery selection, use $(varName) method to declare it. Plain JavaScript's method of variable declarations also work tho */

// SOME USEFUL FUNCTIONS

//Speech recognition func

// let isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
	console.log("Speech recognition API supported!");
  // speech recognition API supported
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
  	$("#recIcon").css("filter", "brightness(40%)");
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
    if (event.error == "no-speech") {
    	$("#recIcon").css("filter", "brightness(80%)");
      let snack = document.querySelector("#snackbar");
      snack.innerText = "No speech was detected. Please try again!";
      stopText();
      playText("Samjhi nahi, zaraa dubaara boli'ay");
      snack.className = "show";
      setTimeout(function () {
        snack.className = snack.className.replace("show", "");
      }, 3500);
    }
  };
  
  recognition.onend = () => {
  	log('Speech recognition service disconnected.');
      $("#recIcon").css("filter", "brightness(80%)");
  }

  $("#recIcon").on("click", function () {
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

  return inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0);
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
  return `Kal ki date rahay gi (or din) ${res}`;
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
    let snack = document.querySelector("#snackbar");
    snack.innerText = "Merry Christmas!";
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
    }, 4000);
  } else if (rslt == 1) {
    let snack = document.querySelector("#snackbar");
    snack.innerText = "Reminder: Kal Christmas hay!";
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
    }, 4000);
  } else if (rslt < 7 && rslt != 0 && rslt != 1) {
    let snack = document.querySelector("#snackbar");
    snack.innerText = `Reminder: Only ${rslt} days left until Christmas!`;
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
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
    let snack = document.querySelector("#snackbar");
    snack.innerText = "Happy New Year's Eve!";
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
    }, 4000);
  } else if (noofdayslefttilNYE == 1) {
    let snack = document.querySelector("#snackbar");
    snack.innerText = "Reminder: Kal New Year ki sham he!";
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
    }, 4000);
  } else if (
    noofdayslefttilNYE < 7 &&
    noofdayslefttilNYE != 0 &&
    noofdayslefttilNYE != 1
  ) {
    let snack = document.querySelector("#snackbar");
    snack.innerText = `Reminder: Sirf ${noofdayslefttilNYE} din reh gae New Year's Eve ane me!`;
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
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
    let snack = document.querySelector("#snackbar");
    snack.innerText = "Happy New Year's Day!";
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
    }, 4000);
  } else if (noofdayslefttilNYD == 1) {
    let snack = document.querySelector("#snackbar");
    snack.innerText = "Reminder: It's New Year's Day tomorrow!";
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
    }, 4000);
  }
};

var msg;
var userName = prompt("Hey, user! What's your name?");
userName = toTitleCase(userName);
var age;
var bday = prompt(
  "What's your bday? Note: We ask for your birthday only for statistical purposes.\nAccepted format *: YYYY(separator)m(separator)d"
);

//Show a snackbar if it's user's birthday today
bday = toTitleCase(bday);
if (isBday(bday)) {
  let snack = document.querySelector("#snackbar");
  snack.innerHTML = "Happy birthday";
  if (
    userName != null &&
    userName.length != 0 &&
    /^[a-z\s]+$/i.test(userName) &&
    userName != ""
  ) {
    snack.innerHTML += `, ${userName}! `;
  } else {
    snack.innerHTML += "! ";
  }
  snack.className = "show";
  /*optional expression*/
  setTimeout(function () {
    snack.className = snack.className.replace("show", "");
  }, 5000);
}
if (
  userName != null &&
  userName.length != 0 &&
  /^[a-z\s]+$/i.test(userName) &&
  userName != ""
) {
  alert(`Welcome, ${userName}!`);
  console.log(`Welcome, ${userName}!`);
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

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

//Nicknaming function
const nickName = () => {
  if (
    userName != null &&
    userName.length != 0 &&
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
  }
  const $time = $("#time");
  msg = hr + ":" + min + ampm;
  $time.html(msg);
  setTimeout(startTime, 1000);
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
      //Show a snackbar every time Speech Synthesis reads the text
      let snack = document.querySelector("#snackbar");
      snack.innerText =
        "Speech synthesis is ongoing. You cannot enter any text in the input field until it finishes.";
      snack.className = "show";
      /*optional expression*/
      setTimeout(function () {
        snack.className = snack.className.replace("show", "");
      }, 2300);
    }
  });
} else {
  log("Speech Synthesis isn't supported by your browser, sorry :'(");
}

const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener("end", () => {
  textInput.disabled = false;
  if (
    snack.innerText ==
    "Speech synthesis is ongoing. You cannot enter any text in the input field until it finishes."
  ) {
    snack.className = snack.className.replace("show", "");
  }
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
    "Don't underestimate me, I can perform logical operations too. For example, if you asked me to inform you whether 2020 or 2021 were a leap year, I'd let you know. And if you asked me to inform you of the date it is going to be tomorrow or the date it was yesterday lol, I'd let you know. What's more, if you asked me to inform you whether it is a weekday today or the weekend yet, I'd let you know.";
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


/* Function for switching Themes



var lTheme, dTheme, islTh, isdTh, snack;
$lTheme = $(".lightTh");
$dTheme = $(".darkTh");
snack = document.querySelector("#snackbar");
function switchTheme() {
  if (islTh && !isdTh) {
    $lTheme.attr("media", "none");
    $dTheme.attr("media", "");
    islTh = false;
    isdTh = !islTh;
    
    
   
    
    let snack = document.querySelector("#snackbar");
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
    
    
    
    let snack = document.querySelector("#snackbar");
    snack.innerText = "Switched to Light Theme";
    snack.className = "show";
    setTimeout(function () {
      snack.className = snack.className.replace("show", "");
    }, 3000);
    console.log("Switched to Light Theme");
  }
}

theme switcher end block */


/* Query function, enable it in case JQuery fails to run
     function $(x) {return document.querySelector(x);} 
Another method for it:
  create a global '$' variable:
window.$ = function(selector) {
  return document.querySelector(selector);
};
*/



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
// setTimeout(greet(), 3000);