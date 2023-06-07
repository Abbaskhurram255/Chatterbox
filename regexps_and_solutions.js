/* regular expressions/ questions to be answered: */ 
 const q1 = /(what'?s?( is)? (up|popping))|(kesi (he|ho))/i, 
   q2 = /(who('?re| are) you)|(ho kon tum)|((he|hay) kon tu)/i, 
   q3 = /(who am I)|(my (info|bio))|(what( do)? you know about me)|(me kon hun?)|(Kyaa?( kyaa?)? janti ho( ap)? mere bare me)/i, 
   q4 = /(kaisi( rahi)? ho)|(how('?ve?| have) you been)/i, 
   q5 = /(kyaa? naa?m (he|hai)|naa?m bataa?o) mera/i, 
   q6 = /(kyaa? bulaun? (me|main?) tumh(e|ain))|((Kya? )?naa?m( kya?)? (he|hai) tumhara)/i, 
   q7 = /(is|was) (this|\d{4})( a)? leap year/i, 
   q8 = /((what'?s?|when'?s?)( is)?|show) my (dob|bday|(birth|b(-)?)day)/i, 
   q9 = /(kya uma?r (he|hay) meri)|(uma?r batao( tum)? meri)/i, 
   q10 = /kisi or naa?m (se|say) (bulao|pukaro)( ap)? mujh(e|ay)/i, 
   q11 = 
   /(((change|resubmit) my|incorrect) (dob|bday|(birth|b(-)?)day))|((dob|bday|(birth|b(-)?)day) is incorrect)/i, 
   q12 = /(me (k(ai|)s(aa?|i) (laga|lagi)))|(ham (kaise lage|pasand a(e|ay)))/i, 
   q13 = 
   /(time ((batao|bataie)|(batao )?kyaa? (horahaa? )?(he|hai|hy)))|((current|local)( date and)? time)|(date today)|(time now)|(date and time)/i, 
   q14 = /^(hi)|(hello)|(hey)|(hola)|(howdy)|(namashkar)|((as)?salam ?(u|o)?( ala?(e|i)kum)?)/i, 
   q15 = /tic( |-)?tac( |-)?toe/i, 
   q16 = /(weather today)|(temperature today)|(is it a (hot|rainy|cloudy|sunny) day today)|(mausam)|(mosam)/i, 
   q17 = /^$/, 
   q18 = /((open|run|launch|execute|kholo) calc(ulator)?)|(calculate(?:bmi))/i, 
   q19 = 
   /(tts)|(speech engine)|(text to speech)|(ebook to audiobook)|((document|text) reader)/i, 
   q20 = /((my|take|open|launch) notes)|(journal)|(notebook)/i, 
   q21 = /(todo)|(reminder)|(remind me to)|((bucket|shopping) list)/i, 
   q22 = /(music)|(songs?)|(jukebox)|(gaa?n(e|ay))/i, 
   q23 = /weight( units)? conver(sion|ter)/i, 
   q24 = /(random (fun|games?))|(I'?( ?a)?m bored)|(games)|(play( me)? a game)/i, 
   q25 = /^(play( me)?|run|launch|execute) breakout/i, 
   q26 = /^(play( me)?|run|launch|execute) flappy ?bird/i, 
   q27 = /^(play( me)?|run|launch|execute) hangman/i, 
   q28 = /^(play( me)?|run|launch|execute) pacman(ia)?/i, 
   q29 = /^(play( me)?|run|launch|execute) (rock|stone) paper scissors?/i, 
   q30 = /(lyrics)|((encycl|lyric)opedia)/i, 
   q31 = /((crypto)?currency)|(exchange rates?)|(\w\w\w to \w\w\w)/i, 
   q32 = /(what )?day of year( is it)?/i, 
   q33 = 
   /(is (this|it)( a)? weekday (today|yet))|((is today|today is) a weekday)/i, 
   q34 = /is (it|this)( a)? weekend( day)? (today|yet)/i, 
   q35 = /numbers? to roman/i, 
   q36 = /(mi|miles) (and|to) (km|kilometers)/i, 
   q37 = /(km|kilometers) (and|to) (mi|miles)/i, 
   q38 = /what (date|day) was it yesterday/i, 
   q39 = /what (date|day) will it be tomorrow/i, 
   q40 = /monopoly/i, 
   q41 = /(canvas)|(drawing app)|(draw(ing)? karna chaha?t(a|i) hun?)/i, 
   q42 = /(audio (visuali(z|s)er|player))|(play( local)? audio)/i, 
   q43 = /breaking bad cast/i, 
   q44 = /(b(ody )?m(ass )?i(ndex)?)|(Kyaa? (may|me) mot(ee|i)? hu)/i, 
   q45 = /^(execute|launch|play( me)?|run) (the )?maze/i, 
   q46 = /calendar/i, 
   q47 = /my recipes/i, 
   q48 = /(space invaders)|(invasion game)/i, 
   q49 = /voice ?(notes|recorder)/i, 
   q50 = /(google doodles)|(what event is it today)/i, 
   q51 = /(percentage calculator)|(calculate percentage)/i, 
   q52 = /temperature( units)? conver(sion|ter)/i, 
   q53 = 
   /(meal finder)|(find( me)? meals?)|(recipes?)|(how to cook)|(help me (cook|with cooking))/i, 
   q54 = 
   /(I'?( ?a)?m (anxious|tired))|(help me (calm down|relax|with my anxiety))|(relaxer)/i, 
   q55 = 
   /(new year countdown)|(((days|time)( left)? (un)?till?|(what time|when) is) new year)|(new year (kab|kitna (door|dur)) he)/i, 
   q56 = /(typing game)|((open|run|launch|play( me)?) speed( |-)?typer)/i, 
   q57 = 
   /((expenses?|budget) tracker)|(track my (budget|expenses?|pocket money))/i, 
   q58 = /(stopwatch)|(countdown timer)|(counter ?clock)|(count down)/i, 
   q59 = /(miner of lava)|(lava game)/i, 
   q60 = 
   /((loan|mortgage) (calculator|payment))|(calculate( my)? (loan|mortgage))|(how much do (I|people) owe)/i, 
   q61 = /quotes?/i, 
   q62 = /memory (game|test)/i, 
   q63 = /(calo(ries? )?tracker)|(track calories)/i, 
   q64 = /(dungeon crawler)|(rogue-?life)/i, 
   q65 = /(fotoflick)|(puzzle game)|((photo|picture) puzzle)/i, 
   q66 = 
   /((motivate|inspire) me)|(I'?( ?a)?m demotivated)|(motivat(ional|ing) app)/i, 
   q67 = /((space(X|station)|nasa) (data|live))|(live( outer)? space)/i, 
   q68 = /(snapshots?)|(landscapes)|(wallpapers)/i, 
   q69 = /features/i, 
   q70 = /(trivia)|(quiz)|(game of questionnares)/i, 
   q71 = /(ratings? for( tv)? (series|serials?))|((tv )?series app)/i, 
   q72 = 
   /((movies?'? (cast|ratings?))|(ratings? (for|of) movies?))|(movies? app)/i, 
   q73 = /(day (planner|scheduler))|((plan|schedule)( my)? day)/i, 
   q74 = /(chase( |-)the( |-)box)|(box chaser)/i, 
   q75 = /giphy/i, 
   q76 = 
   /(pass(code|word|phrase) generator)|(generate( me)? (a )?(random|difficult)? pass(code|word|phrase))/i, 
   q77 = /the (logic game|constructor)/i, 
   q78 = 
   /(fisave)|(net ?worth track(er|ing))|(track (my net ?worth|net ?worth of mine))/i, 
   q79 = 
   /(aa?dat to(r|d)ni h(e|ai) maine)|((break|track) ((a |my )(bad )?habits?|(a( bad)? habit|(bad )?habits) of mine))/i, 
   q80 = 
   /(habits? build(er|ing))|(help( me)? (with building|build) a( good)? habit)/i, 
   q81 = /unit conver(sion|ter)/i, 
   q82 = /(game of (games|adventures?))|(adventurous game)/i, 
   q83 = /my( fave?(orite)?)? ?books?'? ?list/i, 
   q84 = /(math flash ?cards)|((arithmetic|math) game)/i, 
   q85 = /simon/i, 
   q86 = /light maze/i, 
   q87 = 
   /(book|pdf|kitab) (read kar ?k(e|ai)|parh ?k(e|ai)) (do|den?|bataa?o|de sakt(e|i) ho)/i, 
   q88 = 
   /(^(open|launch|run)?( me)? ?travels? ?(app|plan(ning|s|ner))$)|(help me ?(to|with|in)? plan(ning)? travels)/i, 
   q89 = /truth or dare/i, 
   q90 = /metronome/i, 
   q91 = /you licensed/i, 
   q92 = /kis ne (banaya|create|develop kia) tumh(e|ai)/i; 
  
 function ask() { 
   const q = document.querySelector("#searchInput").value; 
   const $output = $("#message"); 
   if (q1.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "Kuch khaas nahi"; 
     if ( 
       userName != null && 
       userName.length != 0 && 
       /^[a-z\s]+$/i.test(userName) && 
       userName != "" 
     ) { 
       msg += ` ${userName} ji, aap sunao?`; 
     } else { 
       msg += ", aap sunao?"; 
     } 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q2.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = 
       "Mayray ilawah or kon ho saktaa hay? May Ayesha, aap jaysay achay insaan say mil kay bayhad khushi huif. Bas boli'ay toh, hukam kiji'ay! Batai'ye kaysee khidmat kar sakti hu may aapki?"; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q3.test(q)) { 
     $("#message").slideFadeToggle(800); 
     let age = calc_age(new Date(bday)); 
     msg = "<em style='font-weight:600;'>"; 
     msg += "Here's what I know about you:<ul>"; 
     msg += "<li>Your name: "; 
     if ( 
       userName != null && 
       userName.length != 0 && 
       /^[a-z\s]+$/i.test(userName) && 
       userName != "" 
     ) { 
       msg += userName.split(" ")[0]; //only show the first name 
     } else { 
       msg += "Not saved yet :("; 
     } 
     msg += "</li><li>Your birthday: "; 
     if ( 
       bday != null && 
       /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
       bday != "" && 
       /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
         bday 
       ) 
     ) { 
       msg += bday; 
       if (isBday(bday)) { 
         msg += " (today)"; 
       } 
     } else { 
       msg += "Not saved yet :("; 
     } 
     msg += "</li><li>Your age: "; 
     if (!isNaN(parseInt(age))) { 
       msg += age; 
     } else { 
       msg += "Couldn't calculate on account of not knowing your birthday yet"; 
     } 
     msg += "</li></ul></em>"; 
     $output.html(msg); 
     console.log(msg); 
     if ( 
       /your (name|age|birthday):/im.test(msg) && 
       mesg.innerText.toLowerCase().indexOf("data received via") === -1 
     ) { 
       const API_KEY = 
         "63a8b1ef829b0a90909b1bb7e9c931fe1ffb70e27378da4c302e22c7"; 
       $.get( 
         `https://api.ipdata.co/?api-key=${API_KEY}`, 
         function (response) { 
           $("#message").append( 
             `<br><b>Further data... received via your IP Address (oops, that was nosy, wasn't? Whisphers, <em>"sorry!"</em>) </b><br>Your precise location: ${response.country_name} <img src="${response.flag}" height="15vh" width="22vw"> <sup><small>[${response.country_code}]</small></sup><br>Your native language: probably ${response.languages[1].name}<br>Your timezone: UTC ${response.time_zone.offset} (${response.time_zone.abbr})<br>Note: We value your privacy! None of your data will be shared with a third-party. This is just a demonstraion of how far the AI can go, hence the "<em>precise</em>" location.` 
           ); 
         }, 
         "jsonp" 
       ); 
     } 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q4.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "Not bad, and you?"; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q5.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "Your name is "; 
     if ( 
       userName != null && 
       userName.length != 0 && 
       /^[a-z\s]+$/i.test(userName) && 
       userName != "" 
     ) { 
       msg += userName; 
       msg += `. If you'd like me to call you a different name (for example, a nickname), <a onclick="$('#searchInput').val('Change my name');stopText();ask();playText(mesg.innerText);" onmouseover="$(this).css('cursor', 'pointer')" style="color:rgba(0,0,255,0.9);text-decoration:underline;">Click here</a>${nickName()}!`; 
     } else { 
       msg += "not saved yet"; 
       msg += `. <a onclick="$('#searchInput').val('Save my name');stopText();ask();playText(mesg.innerText);" onmouseover="$(this).css('cursor', 'pointer')" style="color:rgba(0,0,255,0.9);text-decoration:underline;">Click here</a> to resubmit your name!`; 
     } 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q6.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "Just call me Chatterbox, luv :D"; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q7.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = document.querySelector("#searchInput").value; 
     msg = msg.replace(/this/i, new Date().getFullYear()); 
     msg = msg.replace(/was/i, "is"); 
     msg = msg.substr(3, 4); 
     msg = parseInt(msg); 
     log(msg); 
     if (isLeapYear(msg) == true) { 
       msg = `Of course, ${msg} is a leap year!`; 
       let x = msg.slice(11, 15); 
       let curY = new Date().getFullYear(); 
       if (curY != x && curY > x) { 
         msg = msg.replace(/is/i, "was"); 
       } 
     } else { 
       msg = "In accordance with my intelligence, no it's not."; 
     } 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q8.test(q)) { 
     $("#message").slideFadeToggle(800); 
     if ( 
       bday != null && 
       /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
       bday != "" && 
       /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
         bday 
       ) 
     ) { 
       bday = toTitleCase(bday); 
       msg = `Your birthday is ${bday}`; 
       log(msg); 
       if (isBday(bday)) { 
         msg += 
           " (today)<br>Happy birthday, by the way! Hurrah!"; 
       } 
     } else { 
       bday = prompt( 
         "Your bday isn't saved yet. Would you mind (re-)listing it?\nAccepted format: YYYY(separator)m(separator)d\nNote: We ask for your birthday only for statistical purposes." 
       ); 
       bday = toTitleCase(bday); 
       msg = `Date set. Your newly set bday is ${bday}`; 
       log(msg); 
     } 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q9.test(q)) { 
     $("#message").slideFadeToggle(800); 
     if ( 
       bday != null && 
       /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
       bday != "" && 
       /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
         bday 
       ) 
     ) { 
       age = calc_age(new Date(bday)); 
       msg = `You are ${age}`; 
       if (age <= 18) { 
         msg += ". Too young, pal"; 
         console.log(msg); 
       } 
     } else { 
       bday = prompt( 
         "Can't calculate your age without knowing your bday. Please (re)submit your bday first.\nSupported format: YYYY(separator)m(separator)d" 
       ); 
       age = calc_age(new Date(bday)); 
       msg = "You are " + age; 
       if (age <= 18) { 
         msg += ". Too young, pal"; 
         console.log(msg); 
       } 
     } 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q10.test(q)) { 
     $("#message").slideFadeToggle(800); 
     let cfm = confirm("Are you sure?"); 
     if (cfm) { 
       userName = prompt("What do you want me to call you?", userName); 
       userName = toTitleCase(userName); 
       console.log(`New username: ${userName}`); 
       if ( 
         userName != null && 
         userName.length != 0 && 
         /^[a-z\s]+$/i.test(userName) && 
         userName != "" 
       ) { 
         msg = `Alright, I'll call you ${userName} from now on :)`; 
         console.log(msg); 
       } else { 
         userName = prompt("Couldn't change your name. Try resubmitting it."); 
         userName = toTitleCase(userName); 
         msg = `Alright, I'll call you ${userName} from now on ;)`; 
         console.log(msg); 
       } 
       $output.html(msg); 
       log(msg); 
       $("#message").delay(10000).slideFadeToggle(800); 
     } 
   } else if (q11.test(q)) { 
     $("#message").slideFadeToggle(800); 
     let cfm = confirm("Are you sure?"); 
     if (cfm) { 
       bday = prompt( 
         "Resubmit your bday. The format should be: YYYY(separator)m(separator)d\nNote: We ask for your birthday only for statistical proposes." 
       ); 
       if ( 
         bday != null && 
         /^[0-9a-zA-Z(-\.\_\s\/)]+$/i.test(bday) && 
         bday != "" && 
         /^\d{4}[\/.,-\s](\d{1,2}|\b(\w*(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*)\b)[\/.,-\s]\d{1,2}$/i.test( 
           bday 
         ) 
       ) { 
         msg = `&#128076; Done. Your newly set bday is ${bday}`; 
         console.log(msg); 
       } else { 
         bday = prompt( 
           "Couldn't change your bday. Try resubmitting it.\nNote: We ask for your birthday only for statistical purposes." 
         ); 
         msg = `&#128076; Done. Your newly set bday is ${bday}`; 
         console.log(msg); 
       } 
       $output.html(msg); 
       log(msg); 
       $("#message").delay(10000).slideFadeToggle(800); 
     } 
   } else if (q12.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "You are! In some ways, I think you are even nicer than I am. I'm not as funny as you are!"; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q13.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = dateTime(); 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q14.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = 
       "Hey there, want some assistance? Try asking me for <a onclick='$(\"#searchInput\").val($(this).html());stopText();ask();playText(mesg.innerText);' onmouseover='$(this).css(\"cursor\", \"pointer\")' style='font-weight:500;font-style:italic;color:rgba(0,0,255,0.9);text-decoration:underline;'>current date and time</a>"; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q15.test(q)) { 
     let ticTacToeWin = window.open( 
       "./tic-tac-toe/", 
       "_blank", 
       "width=500,height=900,resizable=yes,toolbar=no,menubar=no" 
     ); 
     if (ticTacToeWin) { 
       window.focus(); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q16.test(q)) { 
     let weatherWin = window.open("./weather/", "_blank"); 
     if (weatherWin) { 
       window.focus(); 
       log("Launched Weather"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q17.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "Aray kuch pucho gay bhi ya bas yuhi dekhte raho gay?"; 
     $output.html(msg); 
     let audio = new Audio; 
     audio.src = "./attitude.mp3"; 
     utterance.onend = function () { audio.play(); } 
     setTimeout(() => { utterance.onend = ""; }, 10000); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q18.test(q)) { 
     let calcWin = window.open("../calc/", "_blank"); 
     if (calcWin) { 
       window.focus(); 
       log("Launched Calculator"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q19.test(q)) { 
     let ttsWin = window.open("./tts/", "_blank"); 
     if (ttsWin) { 
       window.focus(); 
       log("Launched TTS"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q20.test(q)) { 
     let notesWin = window.open("./notes-app-project-master/", "_blank"); 
     if (notesWin) { 
       window.focus(); 
       log("Launched Notes"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q21.test(q)) { 
     let todoWin = window.open("./todo-app-project-master/", "_blank"); 
     if (todoWin) { 
       window.focus(); 
       log("Launched Todo app"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q22.test(q)) { 
     let musicWin = window.open("./music/", "_blank"); 
     if (musicWin) { 
       window.focus(); 
       log("Launched Music"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q23.test(q)) { 
     let weightConvAppWin = window.open("./weight-conv/", "_blank"); 
     if (weightConvAppWin) { 
       window.focus(); 
       log("Launched Weight Converter"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q24.test(q)) { 
     if (detectDeviceType() != "Desktop" || detectDeviceType() == "Mobile") { 
       alert( 
         "You should on be a desktop for better stability because some games are not optimized for mobile devices!" 
       ); 
     } 
     let games = [ 
       "./tic-tac-toe/", 
       "./2D-Breakout-Game-JavaScript-master/", 
       "./FlappyBird-JavaScript-master/", 
       "./Javascript-Pacman-master/", 
       "./hangman-master/", 
       "./Rock-Paper-Scissor-master", 
       "./Monopoly-master", 
       "https://alexs-maze-game.netlify.app/", 
       "./canvas-drawing-app-master", 
       "./space-invaders/", 
       "./typing-game/", 
       "./miner-of-lava/", 
       "./mem-game/", 
       "../dungeon-crawler/", 
       "../foto-flick/", 
       "../Trivia-Db/", 
       "./box-chaser/", 
       "./The Constructor/", 
       "./RPG-game/", 
       "../math-flash-cards/", 
       "https://alexs-simon-says.netlify.app/", 
       "./light-maze/", 
       "https://truth-or-dare-by-alex.netlify.app", 
     ]; 
     let gamesWin = window.open( 
       games[Math.floor(Math.random() * games.length)], 
       "_blank" 
     ); 
     if (gamesWin) { 
       window.focus(); 
       log("Launched a random game"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q25.test(q)) { 
     let breakOutWin = window.open( 
       "./2D-Breakout-Game-JavaScript-master/", 
       "_blank", 
       "width=460,height=550,resizable=no,toolbar=no,menubar=no" 
     ); 
     if (breakOutWin) { 
       window.focus(); 
       log("Launched Breakout"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q26.test(q)) { 
     let flappyBirdWin = window.open( 
       "./FlappyBird-JavaScript-master/", 
       "_blank", 
       "width=380,height=630,resizable=no,toolbar=no,menubar=no" 
     ); 
     if (flappyBirdWin) { 
       window.focus(); 
       log("Launched FlappyBird"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q27.test(q)) { 
     let hangManWin = window.open("./hangman-master/", "_blank"); 
     if (hangManWin) { 
       window.focus(); 
       log("Launched Hangman"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q28.test(q)) { 
     let pacManWin = window.open( 
       "./Javascript-Pacman-master/", 
       "_blank", 
       "width=527,height=527,resizable=no,toolbar=no,menubar=no" 
     ); 
     if (pacManWin) { 
       window.focus(); 
       log("Launched Pacman"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q29.test(q)) { 
     let rockPSWin = window.open( 
       "./Rock-Paper-Scissor-master/", 
       "_blank", 
       "width=830,height=710,resizable=no,toolbar=no,menubar=no" 
     ); 
     if (rockPSWin) { 
       window.focus(); 
       log("Launched Rock Paper Scissor"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q30.test(q)) { 
     let lyricsAppWin = window.open("./lyrics-search-master/", "_blank"); 
     if (lyricsAppWin) { 
       window.focus(); 
       log("Launched Lyricopedia"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q31.test(q)) {
     let curConvAppWin = window.open("./exchange-rate/", "_blank", 
       "width=600,height=800,resizable=no,toolbar=no,menubar=no" 
     ); 
  
     if (curConvAppWin) { 
       window.focus(); 
       log("Launched Currency Converter"); 
     } else { 
       alert("Adblocker ko whitelist kijie please!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q32.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = 
       "Aaj hay din " + 
       dayOfYear(new Date()) + 
       " saal " + 
       new Date().getFullYear() + " ka! "; 
     console.log(msg); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q33.test(q)) { 
     $("#message").slideFadeToggle(800); 
     if (isWeekday()) { 
       msg = "Yes. Of course, it is!"; 
     } else { 
       msg = "According to my intelligence, no, it's not."; 
     } 
     console.log(msg); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q34.test(q)) { 
     $("#message").slideFadeToggle(800); 
     if (isWeekend()) { 
       msg = 
         "Han. bayshak hay! Kisi adventure pay kyun nahi ja'tay?"; 
     } else { 
       msg = "Mayri intelligence kay mutabik, aaj na itwaar hay... or na hafta."; 
     } 
     console.log(msg); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q35.test(q)) { 
     $("#message").slideFadeToggle(800); 
     let p = prompt("Enter number you want me to convert to Roman numeral"); 
     let conv = toRomanNumeral(p); 
     if (/^[0-9]*$/g.test(p) && p != null && p != "" && p != 0) { 
       msg = `Roman numeral for ${p} is ${conv}`; 
     } else { 
       msg = "Values other than integers cannot be converted!"; 
     } 
     console.log(msg); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q36.test(q)) { 
     $("#message").slideFadeToggle(800); 
     let p = prompt("Enter miles you want me to convert to Km"); 
     let conv = milesToKm(p); 
     if (/^[0-9(.)]*$/g.test(p) && p != null && p != "" && p != 0) { 
       msg = `${p} miles are equal to ${conv} kilometers`; 
     } else { 
       msg = "Values other than numbers cannot be converted!"; 
     } 
     console.log(msg); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q37.test(q)) { 
     $("#message").slideFadeToggle(800); 
     let p = prompt("Enter Kilometers you want me to convert to miles"); 
     let conv = kmToMiles(p); 
     if (/^[0-9(.)]*$/g.test(p) && p != null && p != "" && p != 0) { 
       msg = `${p} Kilometers are equal to ${conv} miles`; 
     } else { 
       msg = "Values other than numbers cannot be converted!"; 
     } 
     console.log(msg); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q38.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = yesterday(); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q39.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = tomorrow(); 
     $output.html(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else if (q40.test(q)) { 
     let monopolyWin = window.open("./Monopoly-master/", "_blank"); 
     if (monopolyWin) { 
       window.focus(); 
       log("Launched Monopoly"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q41.test(q)) { 
     let canvasWin = window.open("./canvas-drawing-app-master/", "_blank"); 
     if (canvasWin) { 
       window.focus(); 
       log("Launched Canvas"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q42.test(q)) { 
     let audioPlayerWin = window.open( 
       "./audio-player-visualizer-master/", 
       "_blank" 
     ); 
     if (audioPlayerWin) { 
       window.focus(); 
       log("Launched AudioPlayer"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q43.test(q)) { 
     let bBadCastWin = window.open("../Breaking-Bad-Cast/", "_blank"); 
     if (bBadCastWin) { 
       window.focus(); 
       log("Launched BBad Cast app"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q44.test(q)) { 
     let bmiCalcWin = window.open("../bmi-calculator/", "_blank"); 
     if (bmiCalcWin) { 
       window.focus(); 
       log("Launched BMI Calculator"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q45.test(q)) { 
     let theMazeWin = window.open( 
       "https://alexs-maze-game.netlify.app/", 
       "_blank" 
     ); 
     if (theMazeWin) { 
       window.focus(); 
       log("Launched The Maze"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q46.test(q)) { 
     let calendarWin = window.open("./calendar-mobile/", "_blank"); 
     if (calendarWin) { 
       window.focus(); 
       log("Launched the mobile-friendly Calendar"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q47.test(q)) { 
     let recipeAppWin = window.open("../recipe-app/", "_blank"); 
     if (recipeAppWin) { 
       window.focus(); 
       log("Launched Recipe App"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q48.test(q)) { 
     let spInvadersWin = window.open("./space-invaders/", "_blank"); 
     if (spInvadersWin) { 
       window.focus(); 
       log("Launched Space Invaders"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q49.test(q)) { 
     let voiceNotesAppWin = window.open("./speech-to-text-js-master/", "_blank"); 
     if (voiceNotesAppWin) { 
       window.focus(); 
       log("Launched Voicenotes App"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q50.test(q)) { 
     let gdoodlesWin = window.open( 
       "./today-in-google-doodles-history/", 
       "_blank" 
     ); 
     if (gdoodlesWin) { 
       window.focus(); 
       log("Launched Today In Google Doodles History"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q51.test(q)) { 
     let percentCalcWin = window.open("./percentage-calc/", "_blank"); 
     if (percentCalcWin) { 
       window.focus(); 
       log("Launched %age calculator"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q52.test(q)) { 
     let tempConvWin = window.open("./temp-conv/", "_blank"); 
     if (tempConvWin) { 
       window.focus(); 
       log("Launched Temperature Converter"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q53.test(q)) { 
     let findMealsWin = window.open("./meal-finder/", "_blank"); 
     if (findMealsWin) { 
       window.focus(); 
       log("Launched Meal Finder"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q54.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let relaxerAppWin = window.open("./relaxer-app/", "_blank"); 
     if (relaxerAppWin) { 
       window.focus(); 
       if (detectDeviceType() == "Desktop" || detectDeviceType() != "Mobile") { 
         msg = "Take a deep breath, "; 
         playText(msg); 
         setTimeout(() => { 
           msg = "breathe in, hold, "; 
           playText(msg); 
           setTimeout(() => { 
             msg = "breathe out"; 
             playText(msg); 
           }, 2005); 
         }, 1650); 
       } 
       log("Launched Relaxer"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q55.test(q)) { 
     let newYearCountdownWin = window.open("./new-year-countdown/", "_blank"); 
     if (newYearCountdownWin) { 
       window.focus(); 
       log("Launched New Year Countdown app"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q56.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let typingGameWin = window.open("./typing-game/", "_blank"); 
     if (typingGameWin) { 
       window.focus(); 
       msg = "How fast do you type? Let's test!"; 
       playText(msg); 
       log("Launched Speed Typer"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q57.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let expenseTrackerWin = window.open("./expense-tracker/", "_blank"); 
     if (expenseTrackerWin) { 
       window.focus(); 
       msg = 
         "Worried about keeping track of your expenses? Don't be. I can help you track them"; 
       playText(msg); 
       log("Launched Expense Tracker"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q58.test(q)) { 
     let timerAppWin = window.open("./timer/", "_blank"); 
     if (timerAppWin) { 
       window.focus(); 
       log("Launched Timer"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q59.test(q)) { 
     let lavaGameWin = window.open("./miner-of-lava/", "_blank"); 
     if (lavaGameWin) { 
       window.focus(); 
       log("Launched Miner of Lava"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q60.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let loanCalcWin = window.open("./loan-calc/", "_blank"); 
     if (loanCalcWin) { 
       window.focus(); 
       msg = "Calculate what your mortgage payment could be"; 
       playText(msg); 
       log("Launched Loan Calculator"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q61.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let randomQuoteWin = window.open("./random-quote-gen/", "_blank"); 
     if (randomQuoteWin) { 
       window.focus(); 
       msg = "Here's a random quote of the day"; 
       playText(msg); 
       log("Launched Quotes app"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q62.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let memoryGameWin = window.open("./mem-game/", "_blank"); 
     if (memoryGameWin) { 
       window.focus(); 
       msg = "Let's test if your memory is weak"; 
       playText(msg); 
       log("Launched Memory Game"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q63.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     let caloTrackerWin = window.open("./calotracker/", "_blank"); 
     if (caloTrackerWin) { 
       window.focus(); 
       msg = "Worried about your diet? Don't be. I can help you track calories"; 
       playText(msg); 
       log("Launched CaloTracker"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q64.test(q)) { 
     let dungeonCrawlerGameWin = window.open("../dungeon-crawler/", "_blank"); 
     if (dungeonCrawlerGameWin) { 
       window.focus(); 
       log("Launched Roguelife"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q65.test(q)) { 
     let fotoflickWin = window.open("../foto-flick/", "_blank"); 
     if (fotoflickWin) { 
       window.focus(); 
       log("Launched Fotoflick"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q66.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let motivQuotesAppWin = window.open( 
       "../motivational-quote-generator/", 
       "_blank" 
     ); 
     if (motivQuotesAppWin) { 
       window.focus(); 
       msg = "Demotivated? Don't be because I'm here to motivate you"; 
       playText(msg); 
       log("Launched Motivational Quotes app"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q67.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let spaceDataAppWin = window.open("../live-spacestation-data/", "_blank"); 
     if (spaceDataAppWin) { 
       window.focus(); 
       msg = 
         "Let discover what's above us, in the space. Search for stuff like blackholes, wormholes, Apollo 8, or 12 mission"; 
       playText(msg); 
       log("Launched Space_data app"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q68.test(q)) { 
     let randImgsGeneratingAppWin = window.open("../SnapShots/", "_blank"); 
     if (randImgsGeneratingAppWin) { 
       window.focus(); 
       log("Launched SnapShots"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q69.test(q)) { 
     msg = ""; 
     $output.text(msg); 
     showFeatures(); 
   } else if (q70.test(q)) { 
     let quizGameWin = window.open("../Trivia-Db/", "_blank"); 
     if (quizGameWin) { 
       window.focus(); 
       log("Launched Trivia_Db"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q71.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let tvSeriesAppWin = window.open("../yoMovies/", "_blank"); 
     if (tvSeriesAppWin) { 
       window.focus(); 
       msg = "Yahaa aapko milaygi ayk say ayk achay draamay or film key information, chahay nai ho ya purani. To fir wait kesa, Koi movie ya show likho (jaysay Housefull, Nautanki Saala), or us key rating pata karo. Kab release hui movie, drame ki story kya hay, kon kon say actors hayn... sab jano, ayk ayk movie or show ka (chahay wo Indian ho, ya American)!"; 
       playText(msg); 
       log("Launched an app for TV-related data"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q72.test(q)) { 
     let moviesAppWin = window.open("../yoMovies/", "_blank"); 
     if (moviesAppWin) { 
       window.focus(); 
       msg = "Yahaa aapko milaygi ayk say ayk achay draamay or film key information, chahay nai ho ya purani. To fir wait kesa, Koi movie ya show likho (jaysay Housefull, Nautanki Saala), or us key rating pata karo. Kab release hui movie, drame ki story kya hay, kon kon say actors hayn... sab jano, ayk ayk movie or show ka (chahay wo Indian ho, ya American)!"; 
       playText(msg); 
       log("Launched Movies"); 
     } else { 
       alert("Please enable popups for this site!"); 
     }
   } else if (q73.test(q)) { 
     msg = ""; 
     $output.html(msg); 
     let daySchedulerAppWin = window.open("./day_scheduler/", "_blank"); 
     if (daySchedulerAppWin) { 
       window.focus(); 
       msg = 
         "Time is a precious resource—you can’t stop using it and you can’t find more of it, but you need it to do absolutely everything. From scheduling meetings to fulfilling orders, time is behind every aspect of running a business and you can’t afford to manage it poorly. So, I think you might want to develop a better routine. If you do, use our built-in application as your scheduler and never miss any of your scheduled work"; 
       playText(msg); 
       log("Launched Day Scheduler"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
   } else if (q74.test(q)) { 
     let boxChaserGameWin = window.open("./box-chaser/", "_blank"); 
     if (boxChaserGameWin) { 
       window.focus(); 
       log("Launched Chase-The-Box"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q75.test(q)) { 
     let giphyAppWin = window.open("./giphy/", "_blank"); 
     if (giphyAppWin) { 
       window.focus(); 
       log("Launched Giphy"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q76.test(q)) { 
     let pwGenAppWin = window.open("./Passwordgen/", "_blank"); 
     if (pwGenAppWin) { 
       window.focus(); 
       log("Launched Password Generator"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q77.test(q)) { 
     let theConstructorWin = window.open("./The Constructor/", "_blank"); 
     if (theConstructorWin) { 
       window.focus(); 
       log("Launched The Constructor"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q78.test(q)) { 
     let fisaveWin = window.open("../fisave-networth-tracking-app/", "_blank"); 
     if (fisaveWin) { 
       window.focus(); 
       log("Launched Fisave"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q79.test(q)) { 
     let habitTrackingAppWin = window.open("../habit-tracker/", "_blank"); 
     if (habitTrackingAppWin) { 
       window.focus(); 
       log("Launched Habit_Tracker"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q80.test(q)) { 
     let habitBuildingAppWin = window.open("../habit-builder/", "_blank"); 
     if (habitBuildingAppWin) { 
       window.focus(); 
       log("Launched Habit_Builder"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q81.test(q)) { 
     let unitConvAppWin = window.open("./unit-conv/", "_blank"); 
     if (unitConvAppWin) { 
       window.focus(); 
       log("Launched Unit_Converter"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q82.test(q)) { 
     let rpgGameWin = window.open("./RPG-game/", "_blank"); 
     if (rpgGameWin) { 
       window.focus(); 
       log("Launched Game_Of_Games"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q83.test(q)) { 
     let bookListAppWin = window.open("./Mybooklist/", "_blank"); 
     if (bookListAppWin) { 
       window.focus(); 
       log("Launched MyBookList"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q84.test(q)) { 
     let mathGameWin = window.open("../math-flash-cards/", "_blank"); 
     if (mathGameWin) { 
       window.focus(); 
       log("Launched Math flashcards game"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q85.test(q)) { 
     let simonGameWin = window.open( 
       "https://alexs-simon-says.netlify.app/", 
       "_blank" 
     ); 
     if (simonGameWin) { 
       window.focus(); 
       log("Launched Simon"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q86.test(q)) { 
     let lightMazeWin = window.open("./light-maze/", "_blank"); 
     if (lightMazeWin) { 
       window.focus(); 
       log("Launched Light Maze"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q87.test(q)) { 
     let pdfReaderWin = window.open("./voice-pdf-viewer/", "_blank"); 
     if (pdfReaderWin) { 
       window.focus(); 
       log("Launched PDF Books Reader"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q88.test(q)) { 
     let travelPlansWin = window.open("../travel-planner/", "_blank"); 
     if (travelPlansWin) { 
       window.focus(); 
       log("Launched Travels app"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q89.test(q)) { 
     let truthOrDareWin = window.open( 
       "https://truth-or-dare-by-alex.netlify.app", 
       "_blank" 
     ); 
     if (truthOrDareWin) { 
       window.focus(); 
       log("Launched Truth_or_Dare"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q90.test(q)) { 
     let metronomeWin = window.open( 
       "https://abbaskhurram255.github.io/metronome/", 
       "_blank" 
     ); 
     if (metronomeWin) { 
       window.focus(); 
       log("Launched Metronome"); 
     } else { 
       alert("Please enable popups for this site!"); 
     } 
     stopText(); 
     msg = ""; 
     $output.html(msg); 
   } else if (q91.test(q)) { 
     showLicense(); 
   } else if (q92.test(q)) { 
     $("#message").slideFadeToggle(800); 
     msg = "Janna chahtay ho kis nay banaaya mujhay? Ek khubsurat si larki nay! Actually, mujhe bananay wali kaa naam bhi Ayesha hee hay (Ayesha Mehnaz), surprise!"; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } else { 
     $("#message").slideFadeToggle(800); 
     msg = "Sorry yaar, program ab bhi development may hay, mayray developers key mujhay improve karnay may zyaada say zyaada koshish rahegi."; 
     $output.html(msg); 
     console.log(msg); 
     $("#message").delay(10000).slideFadeToggle(800); 
   } 
 }
