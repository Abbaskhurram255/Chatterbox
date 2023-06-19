/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
let mesg;
const list = document.querySelector(".ajax-section .cities");
const submitBtn = document.querySelector("#submit-btn");
const apiKey2 = "218c8b437c70fc5bc33279042c7b2746";

let city;
//auto-detect the location on startup
window.onload = function() {
  $.get("https://api.ipdata.co/?api-key=63a8b1ef829b0a90909b1bb7e9c931fe1ffb70e27378da4c302e22c7", function (response) {
  	city = `${response.city}`;
  $(".top-banner input").val(`${response.city}, ${response.country_code}`);
}, "jsonp");
 setTimeout(function() {
$('button').click();
      playText(`${city} ka mosam`);
return ;
}, 1000)
}


form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;

  //check if there's already a city
  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter(el => {
      let content = "";
      //athens,gr
      if (inputVal.includes(",")) {
        //athens,grrrrrr->invalid country code, so we keep only the first part of inputVal
        if (inputVal.split(",")[1].length > 2) {
          inputVal = inputVal.split(",")[0];
          content = el
            .querySelector(".city-name span")
            .textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
        //athens
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `Pehle hi bata chuki hu weather ${
        filteredArray[0].querySelector(".city-name span").textContent
      } ka ...otherwise agar accurate search results chahien to khul ke pucho, or sheher ke sath country code (eg. London, UK) ya simply, country name (London,United Kingdom) bhi likho 😉`;      form.reset();
      input.focus();
      return;
    }
  }

  //ajax here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey2}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
          <img class="city-icon" src="${icon}" alt="${
        weather[0]["description"]
      }">
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
      mesg = `${name} ka mosam: ${Math.round(main.temp)}°C, ${weather[0]["description"]}`;
      playText(mesg);
    })
    .catch(() => {
      msg.innerHTML = "Please kisi aysay shay'here kay baaray may search karain jo waa'kai may ho. Jesa kay, Karachi. Ya Mumbai, ya Kansas? Ya to khul kay bolo, or sath may country code bhi likho takay may khulkay samajh paoon. 'Mumbai, IN' likho, jaysay kay";
      mesg = "Please kisi aysay shay'here kay baaray may pucho jo waa'ka'i may ho. Jesa kay Karachi... ya Mumbai, ya Kansaas. Ya tau khul kay bolo, or sath may country code bhi likho taakay may khul'kay samajh pa'oon. 'Mumbai I.N.' likho... jaysa kay.";
      playText(mesg);
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});

// Speech Engine section
//start block
let currentCharacter;

if ("speechSynthesis" in window) {
  console.log("Speech Synthesis is supported!");
  form.addEventListener("submit", () => {
      if (speechSynthesis.speaking) {
        stopText();
      }
  });
} else {
  console.log("Speech Synthesis isn't supported by your browser");
}

const utterance = new SpeechSynthesisUtterance();
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
  speechSynthesis.speak(utterance);
}

//Call this function to (immediately) stop the Speech synthesis:
function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
