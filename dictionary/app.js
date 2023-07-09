const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

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
	console.log(res);
	return res;
}

btn.addEventListener('click', () => {
    let inpWord = document.getElementById('inp-word').value;
    fetch(`${url}${inpWord}`)
        .then(response => response.json())
        .then(data => {
            console.log(data[0].meanings[0].definitions.length);
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
                 	result.innerHTML += `<strong style="font-size:20px;color:green">:</strong> ${data[0].meanings[0].synonyms[num] || ""}<br />`;
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
    
document.body.onload = () => {
	const example = () => {
		let newInitialValue = "Babe";
		document.querySelector("input").value = newInitialValue;
		btn.click();
		document.querySelector("input").value = "Babe - Example";
		window.setTimeout(hideNow, 5000); 
	}
	
	const hideNow = () => {
		document.querySelector("input").value = "";
	}
	
    window.setTimeout(example, 10000); 
}