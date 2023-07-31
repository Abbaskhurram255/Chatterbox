const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchageIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i");
translateBtn = document.querySelector("button"),

selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected = id == 0 ? country_code == "en-US" ? "selected" : "" : country_code == "ur-PK" ? "selected" : "";
        let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
        tag.insertAdjacentHTML("beforeend", option);
    }
});

exchageIcon.addEventListener("click", () => {
    let tempText = fromText.value,
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;
});

fromText.addEventListener("keyup", () => {
    if(!fromText.value) {
        toText.value = "";
    }
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value.trim(),
    translateFrom = selectTag[0].value,
    translateTo = selectTag[1].value;
    if(!text) return;
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl, tempapiUrl, tempapiVal;
    apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    if (translateTo == "ur-PK") {
    	tempapiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|hi-IN`;
    fetch(tempapiUrl).then(res => res.json()).then(data => {
        tempapiVal = data.responseData.translatedText;
        data.matches.forEach(data => {
            if(data.id === 0) {
                tempapiVal = data.translation;
                
            }
        });
        toText.setAttribute("placeholder", "Translation");
    });

    }
    
    fetch(apiUrl).then(res => res.json()).then(data => {
        toText.value = data.responseData.translatedText;
        data.matches.forEach(data => {
            if(data.id === 0) {
                toText.value = data.translation;
                if (translateTo == "ur-PK" && tempapiVal != null && tempapiVal != "") {
                	playText(tempapiVal);
                } else {
                	playText(toText.value);
                }
                
            }
        });
        toText.setAttribute("placeholder", "Translation");
    });
});

icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        if(!fromText.value || !toText.value) return;
        if(target.classList.contains("fa-copy")) {
            if(target.id == "from") {
                navigator.clipboard.writeText(fromText.value);
            } else {
                navigator.clipboard.writeText(toText.value);
            }
        } else {
            let utterance;
            if(target.id == "from") {
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value;
            } else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});

fromText.onkeydown = function (e) {
    let code = e.keyCode ? e.keyCode : e.which;
    if (code == 13) {
    	document.querySelector("#btn").click();
    }
}


const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener("end", () => {
  fromText.disabled = false;
});
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
  utterance.lang = selectTag[1].value;
  if (utterance.lang == "ur-PK") {
  	utterance.lang = utterance.lang.replace("ur-PK", "hi");
  }
  utterance.volume = 1;
  utterance.rate = 1;
  fromText.disabled = true;
  speechSynthesis.speak(utterance);
}

