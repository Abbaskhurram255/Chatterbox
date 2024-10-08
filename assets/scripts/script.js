﻿const $snack = $("#snackbar");
const randFrom = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};

/* load default (light) theme every time the window (aka body object (DOM document.body) loads) nd show a tooltip whenever searchInput is active. Run startTime function too */


window.onload = () => {
    startTime();
    // playing bubbles_audio on startup
    const bubbles_audio = new Audio('bubbles.mp3');
    bubbles_audio.autoplay = "autoplay";
    bubbles_audio.loop = "loop";
    bubbles_audio.volume = "0.5";
    // keep trying to play the bubbles sfx every 5 seconds until the user finally interacts with the app, resulting the audio finally playing for real!
    setInterval(() => {
            if (bubbles_audio
                .paused || bubbles_audio
                .currentTime) {
                if (document.hasFocus()) {
                    bubbles_audio.play();
                } else {
                    bubbles_audio.pause();
                }
            }
        },
        5000);
    // automatic speeches making the app interactive
    const random_speech = () => {
        let flirt_responses = [
            "hey handsome, kaysee khidmat kar sakti hu may aapki",
            "boaree'yat ho rahi ho. to abhi entertain me bolo. or fun dekho",
            "boaree'yat ho rahi ho. tou saath may ludo khele?",
            "sketches aur arts se pyaar hey? how sweet, mujhe bhi. Abhi brush tool ya canvas likho, or banaao apne khud kay sketches",
            "boaree'yat ho rahi ho. to abhi internet fun bolo. or fun dekho"
        ];
        if (
            userName != null &&
            userName.length >= 3 &&
            /^[a-z\s]+$/i.test(userName) &&
            userName != ""
        ) {
            flirt_responses[1] += `, ${userName} ji`;
            flirt_responses[2] += `, ${userName} ji`;
            flirt_responses.push(
                "oo. naam hee itnaa accha hey, to khud kaisay hoge");
        }
        let main_responses = [
            "music chaalane ka bolo to music chalaaoon?",
            "khabray? wo bhi mil ja'i gi. sirf news bolke tou dekhiye",
            "reminder set karna hey tou sirf reminders bolo or abhi set karo",
            "words translate karne hey tou sirf translate now bolo, or translation haasil karo",
            "dictionary bhi available hey",
            "aapkay shay'here ka mausam bolo tou wo bhi bataa sakti hu",
            "photo editor bhi available hey. Will be improved in the future.",
            "currency converter bhi available hey, jab chaaho ek currency se doosri currency ka exchange rate pataa karo",
            "youtube chalaanay ke lee'yay bolo tou wo bhi chalaaoon?",
            "encyclopedia bhi available hey, jahaa aap ek ek cheez ki jaankaari paa saktay hey sirf oos ka naam likh kay. Kya cheez hey, kab k'yoo or kaisay bani. or kis ne banaaya. wagayra, wagayra",
            "Bank say lee'ya hua loan kaysay chukta hoga. ye tak bataa sakti hu may. sirf loan calculator likho tou",
            "strong password chaaheeyay, taakay koi bhi aapkay kisi bhi account ka password naa tor sakay, to abhi password generator likho, or. ek mazboot password haasil karo. . advice. is password ko ek acchi see jagaa save karkay rakheeyay gaa taakay aap khud hee na bhool jaa'ay haha!",
            "life may behtree laanay ki salaah chahte ho tou abhi advice generator bolo, or salaah haasil karo",
            "smash cube likho, or lootf lo iss platform ki sab say behtareen puzzle game kaa",
            "ludo likho, or lootf lo iss platform ki sab say acchi board game kaa"
        ];
        let arr = [];
        //joining flirt responses with main responses
        arr.push(...flirt_responses, ...main_responses);
        log(`Automatic speech responses found: ${arr.length}\n${arr}`);
        return randFrom(arr);
    }
    //making a random speech play every 15s from the array
    setInterval(() => {
        if (!speechSynthesis.speaking && document.hasFocus())
            playText(random_speech());
    }, 20000);

    /*
    extras
    $lTheme.attr("media", "");
    $dTheme.attr("media", "none");
    islTh = true;
    isdTh = false;
    */

    //check if jQuery has finished loading every time the window loads as 90% of the app relies on it!
    if (jQuery) {
        log("JQuery loaded successfully!");
    } else {
        log("Failed to load JQuery :(");
    }
    //add a tooltop to the input as soon as the window finishes loading
    const tippy1 = document.querySelector("#searchInput");
    tippy(tippy1, {
        content: "Mujh se pucho batane ke lie ke <strong onclick=\"document.querySelector('#searchInput').value = this.innerText;\" onmouseover=\"$(this).css('cursor', 'pointer');\">mosam kesa he?</strong> Ya pucho <strong onclick=\"$('#searchInput').val($(this).text());\" onmouseover=\"$(this).css('cursor', 'pointer')\">calendar</strong> kholne ke lie, ya pucho latest <strong onclick=\"$('#searchInput').val($(this).text())\" onmouseover=\"$(this).css('cursor', 'pointer')\">currency rates</strong> batane ke lie, sab karugi me!",
        followCursor: "horizontal",
        interactive: true /* To add interactions to and make the text content of your tippy highlight-able and clickable */ ,
        appendTo: document.body,
        animation: "scale-extreme",
        duration: 1200,
        theme: "translucent",
        allowHTML: true,
        arrow: true,
        maxWidth: 370,
    });

    // Run ASK function everytime the user presses return (enter) key when they are done typing their query
    $("#searchInput").keydown(function(e) {
        const code = e.keyCode ? e.keyCode : e.which;
        if (code == 13) {
            ask();
            if (mesg.innerText != "") {
                if (speechSynthesis.speaking) {
                    stopText();
                }
                playText(mesg.innerText);
                //Show a snackbar everytime the user presses ENTER, making the Speech Synthesis read the text content of the message
                $snack.text(
                    "Speech synthesis is ongoing. You cannot enter any text in the input field until it finishes."
                );
                $snack.addClass("show");
                setTimeout(function() {
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
    $(".menu-toggler-label").click(function() {
        $(".stagger-menu").slideFadeToggle(120);
    });
}; //end block of window.onload method

$(document).ready(function() {
    //JQuery onload functions go here

    setInterval(() => {
        $("#butterfly").attr('src', 'buffly2.gif');
        setInterval(() => $("#butterfly").attr('src',
            'buffly.gif'), 5000);
    }, 25000);
    $("#recIcon").click(() => {
        $("#recIcon").addClass("mikeAnim");
        $("#searchInput").removeClass("glassy-input");
        $("#disco").removeClass("animated-disco");
    });
    $("#logo").on("click", () => {
        $("#logo").addClass("band");
        setTimeout(() => $("#logo").removeClass("band"), 1100);
    });
    $(".animated-butterfly").on("click", () => {
        $(".animated-butterfly").addClass("flipX");
        setTimeout(() => $(".animated-butterfly").removeClass(
            "flipX"), 3100);
    });

    $("#disco").on("click", () => {
        let $input = $("#searchInput");
        let arr = ["entertain karo mujhe", "random fun",
            "music chalaao", "koi game chalaao",
            "ludo chalaao", "play smash cube",
            "dictionary kholiye",
            "translate karo English ko Urdu me"
        ];
        $input.val(randFrom(arr));
        setTimeout(() => {
            if (q94.test($input.val())) {
                stopText();
                $("#askBtn").click();
            }
        }, 3000);
    });
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
    recognition.onresult = function(event) {
        let current = event.resultIndex;

        // Get a transcript of what was said.
        var transcript = event.results[current][0].transcript;

        var mobileRepeatBug =
            current == 1 && transcript == event.results[0][0].transcript;

        if (mobileRepeatBug == false) {
            $("#recIcon").removeClass("mikeAnim");
            $("#searchInput").addClass("glassy-input");
            $("#disco").addClass("animated-disco");
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

    recognition.onerror = function(event) {
        if (/no speech/mi.test(event.error)) {
            $snack.text("No speech was detected, please try again");
            $snack.addClass("show");
            setTimeout(function() {
                $snack.removeClass("show");
            }, 2300);
            stopText();
            playText("Samjhi nahi, zaraa dubaara boli'ay");
            $("#recIcon").removeClass("mikeAnim");
            $("#searchInput").addClass("glassy-input");
            $("#disco").addClass("animated-disco");
            return;
        }
    };

    recognition.onend = () => {
        log('Speech recognition service disconnected.');
        $("#recIcon").removeClass("mikeAnim");
        $("#searchInput").addClass("glassy-input");
        $("#disco").addClass("animated-disco");
        $("#askBtn").click();
    }

    $("#recIcon").on("click", function() {
        //play sound here: add the lines, you know what to do
        stopText();
        recognition.start();
    });

    /* Sync the text inside the text area with the noteContent variable.*/
    noteTextarea.on("input", function() {
        noteContent = $(this).val();
    });
} else {
    let err =
        "Unfortunately, Speech Recognition is not supported by your browser. The microphone function won't work :(";
    log(err);
    alert(err);
}

//JQuery function that makes it easy to toggle a slide w fade animation
$.fn.slideFadeToggle = function(speed, easing, callback) {
    return this.animate({
            opacity: "toggle",
            height: "toggle",
        },
        speed,
        easing,
        callback
    );
};

const isBday = function(dat) {
    let inputDate = new Date(dat);
    let todaysDate = new Date();
    todaysDate.setHours(0, 0, 0, 0);
    todaysDate.setYear(0);

    inputDate.setYear(0);
    return inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0,
        0) && inputDate.valueOf() == todaysDate.valueOf();
};

// function that checks to see if it (or the query) a leap year
function isLeapYear(year) {
    return new Date(parseInt(year), 1, 29).getMonth() == 1;
}

//fn that calculates the dayOfYear
const dayOfYear = (date) => {
    return Math.floor(
        (date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 /
        24
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

//the function that turns a number in-toRomanNumeral
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
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
        .test(
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
        setTimeout(function() {
            $snack.removeClass("show");
        }, 4000);
    } else if (rslt == 1) {
        $snack.text("Reminder: Kal Christmas hey!");
        $snack.addClass("show");
        setTimeout(function() {
            $snack.removeClass("show");
        }, 4000);
    } else if (rslt < 7 && rslt != 0 && rslt != 1) {
        $snack.text(`Reminder: Only ${rslt} days left until Christmas!`);
        $snack.addClass("show");
        setTimeout(function() {
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
        setTimeout(function() {
            $snack.removeClass("show");
        }, 4000);
    } else if (noofdayslefttilNYE == 1) {
        $snack.text("Reminder: Kal New Year ki sham he!");
        $snack.addClass("show");
        setTimeout(function() {
            $snack.removeClass("show");
        }, 4000);
    } else if (
        noofdayslefttilNYE < 7 &&
        noofdayslefttilNYE != 0 &&
        noofdayslefttilNYE != 1
    ) {
        $snack.text(
            `Reminder: Sirf ${noofdayslefttilNYE} din reh ga'ay New Year ki shaam me!`
        );
        $snack.addClass("show");
        setTimeout(function() {
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
        setTimeout(function() {
            $snack.removeClass("show");
        }, 4000);
    } else if (noofdayslefttilNYD == 1) {
        $snack.text("Reminder: It's New Year's Day tomorrow!");
        $snack.addClass("show");
        setTimeout(function() {
            $snack.removeClass("show");
        }, 4000);
    }
};

/*
Swal.fire({
  title: 'Naam jan sakti hu me apka?',
  input: 'text',
  inputPlaceholder: 'aapka naam?',
  imageUrl: 'welcome.png',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Welcome to my application',
}).then((result) => {
	let val = result.value;
	if (val) {
		log(val);
		return setTimeout(() => { userName = val; }, 2000);
	}
});
*/

/*
prompt("Hello ji! Naam jan sakti hu me apka? Apparently, ap ek first time user hen!");
*/
/*
const fetch = async function() {
	Swal.fire({
  title: 'Naam jan sakti hu me apka?',
  input: 'text',
  inputPlaceholder: 'aapka naam?',
  imageUrl: 'welcome.png',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Welcome to my application',
}).then((result) => {
	let val = result.value;
	if (val) {
		log(val);
		return setTimeout(() => { userName = val; }, 2000);
	}
});
}
async function now() {
	let res = await fetch();
	return res;
}
*/

var msg;
const ls = localStorage || window.localStorage;
var userName = ls.getItem("lsuserName") || prompt(
    "Hello ji! Naam jan sakti hu me apka? Apparently, ap ek first time user hen!"
);
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
        /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i
        .test(
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
        /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i
        .test(
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
        $snack.append("!");
    }
    let cupids_arrow =
        " <img alt='emoji' class='emoji' height='32' width='32' style='border-radius: 50%' src='assets/images/emo/cupids_arrow.gif' />";
    let cake =
        " <img alt='emoji' class='emoji' height='32' width='32' style='border-radius: 50%' src='assets/images/emo/cake.gif' />";
    $snack.append(cupids_arrow);
    log("Snack text: " + $snack.text());
    $snack.addClass("show");
    setTimeout(function() {
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
        Swal.fire({
            title: `Welcome, <br/>\@${userName}`,
            confirmButtonText: 'Thanks👍',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            imageUrl: 'thumbs-up.gif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Welcome to my application'
        });
        console.log(`Welcome, ${userName}. This is probably your first time!`);
    } else {
        Swal.fire({
            title: `Welcome back, <br/>\@${userName}`,
            confirmButtonText: 'That\'s great😃',
            confirmButtonAriaLabel: 'Thumbs up, great!'
        });
        console.log(
            `Welcome back. You're definitely not new to this application!`);
    }
    //if doesn't submit any of the prompts, and HASN'T
} else {
    Swal.fire({
        title: "Welcome, l💗v!",
        confirmButtonText: "Okay",
        imageUrl: 'thumbs-up.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Welcome to my application'
    });
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
        return `, ${userName.slice(0, 4)}`;
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
    if (hr >= 12) {
        hr -= 12;
        ampm = "pm";
    }
    if (hr < 10) {
        hr = "0" + hr;
        if (hr == "00") {
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



// shortcut ways to output stuff to the console
//start
function log(x) {
    return console.log(x);
}

function debug(x) {
    return console.debug(x);
}
//end

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

function playText(text, pitch = 1) {
    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume();
    }
    if (speechSynthesis.speaking) return;
    utterance.text = text;
    var voices = window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function() {
        voices = window.speechSynthesis.getVoices();
    };
    utterance.voice = voices[10];
    utterance.pitch = pitch;
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
closeBtn.onclick = function() {
    modal.style.display = "none";
    stopText();
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        stopText();
    }
};

const showFeatures = () => {
    modal.style.display = "block";
    stopText();
    msg =
        "Mujhay kam naa samjho, Math tak kar sakti hoo may. Maslan, if you asked me to inform you whether 2020 or 2021 were a leap year, I'd let you know. And if you asked me to inform you of the date it is going to be tomorrow or the date it was yesterday lol, I'd let you know. What's more, if you asked me to inform you whether it is a weekday today or the weekend yet, I'd let you know. Aaj saal ka kaunsa din hey yay tak bataa sakti hu may";
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

const makeAFeedback = () => {
    stopText();
    let feedbackWin = window.open("./feedback/", "_blank");
    if (feedbackWin) {
        window.focus();
        log("Launched Feedback window!");
        msg =
            "Kya may aapko pasand hu. Or agar hoo bhi tou kitni? Numbers ke hisab say rating deej'yay please. Aapki dee jaanay wali rating mujhe improve karnay may bayhad madadgaar sabit hogi.";
        playText(msg);
    } else {
        alert("Please enable popups for this site!");
    }
    let aBugFix = () => {
        return (textInput.disabled = !true);
    };
    setTimeout(aBugFix(), 2000);
    return;
}

$(document).bind("mouseleave", function(e) {
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
        log(
            "Saved for later! Now let's just wipe the original for now... so that we have a better coding structure afterwards."
        );
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
        log("\nPlaying a Voice FX Element...");
        log(`Filename: ${src}${formatFound}`);
        log("Full Address: " + audio.src);
        log(
            "Format found, didn't need to replace it with the default format, i.e. *.mp3!"
        );
    } else {
        //format not found, *.mp3 will be added automatically 
        if (format == null || format == undefined || format == "" ||
            format == 0) {
            format = format || "mp3";
        }
        audio.src = `${dir}/${src}.${format}`;
        log("\nPlaying Audio");
        log(`Filename: ${src}.${format}`);
        log("Full Address: " + audio.src);
        log("Format not found, so one was added automatically (*.mp3)");
    }
    utterance.onend = function() {
        audio.play();
    }
    if (delay == null || delay == undefined || delay == "" || delay == 0) {
        delay = delay || 10000;
    }
    setTimeout(() => {
        utterance.onend = "";
    }, delay);
}




/* Function for switching Themes


var lTheme, dTheme, islTh, isdTh, snack, $Theme, $dTheme;
$lTheme = $(".lightTh");
$dTheme = $(".darkTh");
function switchTheme() {
    if (islTh && !isdTh) {
        $lTheme.attr("media", "none");
        $dTheme.attr("media", "");
        islTh = false;
        isdTh = !islTh;
        $snack.text("Switched to Dark Theme");
        $snack.addClass("show");
        setTimeout(function () {
            $snack.removeClass("show");
        }, 3000);
        console.log("Switched to Dark Theme");
    }
    else if (isdTh && !islTh) {
        $lTheme.attr("media", "");
        $dTheme.attr("media", "none");
        isdTh = false;
        islTh = !isdTh;
        $snack.text("Switched to Light Theme");
        $snack.addClass("show");
        setTimeout(function () {
            $snack.removeClass("show");
        }, 3000);
        console.log("Switched to Light Theme");
    }
}

theme switcher end block */