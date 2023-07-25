



var data;
/// onload function
onload = function () {
    console.log("here onload");
    askedWeather = false;
    askedNews = false;
    rnd2 = 'd61d4157accb44';
    newsCnt = 0;
    jokesCnt = 0;
    replyCnt = -1;
    chatEnd = false;

    /// sounds initialisation
    userMsgSound = new Sound("media/userMsgSound.mp3");
    botMsgSound = new Sound("media/botMsgSound.mp3");

    /// chat object
    var chatObj = {
        /// initialisation
        init: function () {
            this.cacheDom();
            this.eventBind();
            rnd3 = 'top-news?country=pk&token=114059f';
            // botMsgSound.play();
        },

        /// accesing dom elements
        cacheDom: function () {
            this.chatBox = document.getElementById("chatbox");
            this.msgBox = document.getElementById("msgbox");
            this.msgList = document.getElementById("msgList");
            this.typeBox = document.getElementById("typebox");
            this.sendBtn = document.getElementById("sendBtn");

        },

        /// adding event listeners
        eventBind: function () {
            sendBtn.addEventListener("click", this.addMsg);
            typeBox.addEventListener("keyup", this.addMsgEnter);
            rnd4 = 'current.json?key=c2cf5e10';
        },

        /// renders user message on screen
        userRender: async function () {
            // console.log("here render");
            scrollBottom();
            if (this.newMsg.length != 0) {
                userMsgSound.play();
                showMsg(this.newMsg, "userMsg");
                typeBox.value = "";
                setTimeout(function () {
                    chatObj.botRender();
                }, 750);
            }
            scrollBottom();
        },

        /// rrenders bot message on screen
        botRender: async function () {
            let totalOptions = 4;
            if (this.newMsg != "" && this.newMsg.length < 9 && /^(1|2|3|4|5)( ?stars?)?$/gm.test(this.newMsg)) {
                if (chatEnd == false) {
                	chatEnd = true;
                    (function () {
                    	document.querySelector("#loading").style = "display: block";
                       setTimeout(() => document.querySelector("#loading").style = "display: none", 1500);
                    })();
                    botMsgSound.play();
                    showMsg(`Thank you for your valuable feedback, luv! Your feedback means the world to me as it helps me improve &hearts;<br/><br/><span style="color:red" id="anim">Here's some local news of the day, by the way:</span><br/> ${await functionsArr[1 - 1]()}<br/><br/><span id="anim2" style="color:purple">And a random fact of the day:</span><br/>${await functionsArr[3 - 1]()}<br/><br/>Apki feedback ka behad shukria `, "botMsg");
                    
                    playText("aapki feedback ka bay had shukria. ab aap yay window close kar sakte hay. bonus... neechay likhi hay aap kay area say related aaj kee taaza khabar");
                    utterance.onend = () => { setTimeout(() => {
                        switch (parseInt(this.newMsg)) {
                            case 1:
                            case "1 star":
                            case "1 stars":
                            playText("I'm sorry, kya mene kuch galat kardia? Ya kuch galat keh dia? Pareshaan na ho. Aap ki complain kay mutaabik mujhay jald hee improve kia ja'i gaa! Please come back anytime and report anything. May'ray developers aap kay ek ek lafz ki value rakhtay hay. Aapki complain kisi bhi soorat may zaa'yaa nahi ja'i gi, yay waada rahaa.");
                            break;

                            case 2:
                            case "2 star":
                            case "2 stars":
                            playText("mujhay yay jaan kar dukh hua kay may aap ko pasand nahi ai. I hope aap ko future may mujh say koi complain nahi hogi, kyu kay mujhay improve kar dia jai gaa.");
                            break;
                            
                            case 3:
                            case "3 star":
                            case "3 stars":
                            playText("mujhay yay jaan kar dukh hua kay may aap ko pasand nahi ai. I hope aap ko future may mujh say koi complain nahi hogi, kyu kay mujhay improve kar dia jai gaa.");
                            break;

                            case 4:
                            case "4 star":
                            case "4 stars":
                            playText("mujhay yay jaan kar khushi hoo'ee kay may aap ko pasand hu");
                            break;

                            case 5:
                            case "5 star":
                            case "5 stars":
                            playText("Wow, 5 stars? Oh my goodness, thank you, thank you, thank you! Aap ka bay had shukria.", 1.2);
                            break;

                            default:
                            return ;
                        }
                        utterance.onend = () => {setTimeout(() => { playText("or jaysa ki may'nay kaha. ab aap yay window close kar saktay hay"); utterance.onend = "";}, 500); }
                    }, 10);
                    
                    }
                    
                }
                else {
                	(function () {
                    	document.querySelector("#loading2").style = "display: block";
                       setTimeout(() => document.querySelector("#loading2").style = "display: none", 500);
                    })();
                    botMsgSound.play();
                    showMsg("<span style='color:red'>Feedback already submitted, you may close the feedback window now!!</span>", "botMsg");
                    playText("aap feedback day chukay jee. side may likhay cross yani X button ko dabaa kar may'ri taraf waapis aao jald hee");
                }
                return;
            }
            if (chatEnd === true) {
                if (this.newMsg.toLowerCase() == "reset" || this.newMsg.toLowerCase() == "'reset'") {
                    window.location.reload();
                }
                else {
                	(function () {
                    	document.querySelector("#loading2").style = "display: block";
                       setTimeout(() => document.querySelector("#loading2").style = "display: none", 500);
                    })();
                    botMsgSound.play();
                    showMsg("Mene kaha feedback submit ho chuki he, ab ap ye window close karke AyeshaPT continue kar sakte he, shukria!", "botMsg");
                    playText("aap feedback day chukay jee. side may likhay cross yani X button ko dabaa kar may'ri taraf waapis aao jald hee");
                }
                return;
            }
            if (this.newMsg === "#" || this.newMsg === "'#'" || this.newMsg === "' # '") {
                botMsgSound.play();
                showMenu();
                return;
            }
            let optionNo = parseInt(this.newMsg);
            if (isNaN(optionNo) == false && 1 <= optionNo && optionNo <= totalOptions) {
                data = await functionsArr[optionNo - 1]();
                replyCnt++;
                // var data = await eval("functionsArr[optionNo - 1]()");
            }
            else {
                data = "<span style='color:red'>Sorry, numbers under 5 only!</span>";
                playText("please sirf numbers may hee rating deej'yay... jaysay kay. Ek. Do. 3. 4. 5!");
            }
            botMsgSound.play();
            showMsg(data, "botMsg");

            if (replyCnt === 0) {
                setTimeout(
                    function () {
                        showMsg("Great !! Keep entering option numbers to keep chatting with me. <br><br>You can enter ' # ' anytime to see the options menu again ! :) <br><br> Enter 'bye' to end the chat at any time.", "botMsg");
                        botMsgSound.play();
                    }, 1000
                );
                replyCnt = 1;
            }
        },

        /// gets called when send button is clicked
        addMsg: function () {
            // console.log("here addMsg");
            chatObj.newMsg = typeBox.value.trim();
            chatObj.userRender();
        },

        /// gets called when enter is pressed
        addMsgEnter: function (e) {
            // console.log("here addMsg");
            if (e.key === "Enter") {
                chatObj.newMsg = typeBox.value.trim();
                chatObj.userRender();
            }
        }

    }
    rnd1 = 'b8d7166488c'

    /// calling init function
    chatObj.init();

}

/// stores functions for each option
var functionsArr = [
    getNews,
    getWeather,
    getFact,
    getJoke
]
rnd6 = '40202407&q=Pakistan';

/// will store json returned from api calls
var jsonObj = {

}

/// function to get news
async function getNews() {
    if (askedNews === false) {
        console.log("news api called");
        try {
        const response = await fetch('https://gnews.io/api/v3/' + rnd3 + rnd1 + rnd2);
        const jsonResp = await response.json();
        jsonObj.newsJson = jsonResp;
        console.log("news articles found for today = " + jsonObj.newsJson.articleCount);
        askedNews = true;
        newsCnt++;
        let artLinkStr = jsonResp.articles[0].source.url;
        return jsonResp.articles[0].title + "<br><br>Source: <a href='" + artLinkStr + "' target='_blank'>" + jsonResp.articles[0].source.name + "</a><br/>";
        } catch(e) {
        	console.log(e);
        }
    } else {

        let foo = jsonObj.newsJson;
        let ind = newsCnt % (foo.articleCount);
        console.log("ind= " + ind);
        newsCnt++;
        let artLinkStr = foo.articles[ind].source.url;
        return foo.articles[ind].title + "<br><br>Source: " + "<a href=\"" + artLinkStr + "\" target=\"_blank\">" + foo.articles[ind].source.name + "</a>" + "<br><br>Shukria!";
    }
    // return "This is a news";
}

/// function to get weather
async function getWeather() {
    if (askedWeather === false) {
        console.log("weather api called");
        const response = await fetch('https://api.weatherapi.com/v1/' + rnd4 + rnd5 + rnd6);
        const jsonResp = await response.json();
        askedWeather = true;
        jsonObj.weatherJson = jsonResp;
        return "Current Temperature: " + jsonResp.current.temp_c + "\xB0C<br>Feels Like: " + jsonResp.current.feelslike_c + "\xB0C<br>Cloud Cover: " + jsonResp.current.cloud + "%<br>Humidity: " + jsonResp.current.humidity + "%" + "<br><br>Enter 2 again to get the weather update again or choose another option !";
    }
    else {
        let foo = jsonObj.weatherJson;
        return "Current Temperature: " + foo.current.temp_c + "\xB0C<br>Feels Like: " + foo.current.feelslike_c + "\xB0C<br>Cloud Cover: " + foo.current.cloud + "%<br>Humidity: " + foo.current.humidity + "%" + "<br><br>Enter 2 again to get the weather update again or choose another option !";
    }

    // return "This is the weather";
}

/// function to get fact
async function getFact() {
    const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
    const jsonResp = await response.json();
    return jsonResp.text;
    // return "Fun Fact: I am a Bot but I have feelings too!! :)";
}

/// function to get joke
async function getJoke() {
    if (jokesCnt % 10 === 9) {
        const response = await fetch('https://api.icndb.com/jokes/random');
        const jsonResp = await response.json();
        jokesCnt++;
        return jsonResp.value.joke;
    }
    else {
        const options = {
            headers: {
                Accept: "application/json"
            }
        };
        const response = await fetch("https://icanhazdadjoke.com/", options);
        const jsonResp = await response.json();
        jokesCnt++;
        return jsonResp.joke;
    }

}

/// function to scroll to bottom of page
function scrollBottom() {
    var scrollElm = document.scrollingElement;
    scrollElm.scrollTop = scrollElm.scrollHeight;
}

/// function that prints menu
function showMenu() {
    let nMsg = document.createElement('li');
    nMsg.innerHTML = "Menu: <br>1.Check the news <br>2.Get weather updates <br>3.Read a fun fact <br>4.Read a joke <br><br>Enter an option number to continue or enter 'bye' to end the chat.";
    nMsg.className = "botMsg";
    msgList.appendChild(nMsg);
}
rnd5 = '2508406abcc1446';

/// function that prints messages
function showMsg(data, msgClass) {
    let nMsg = document.createElement('li');
    nMsg.innerHTML = data;
    nMsg.className = msgClass;
    msgList.appendChild(nMsg);
}

/// class to handle sounds
class Sound {
    constructor(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);

        /// method definition
        this.play = function () {
            this.sound.play();
        };
        this.stop = function () {
            this.sound.pause();
        };
    }
}

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