

const h2 = document.querySelector("h2").classList;
var returning_from_settings = false;

start_from_menu = () => {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game_display").style.display = "block";
    document.querySelector("footer").style.display = "none";
    returning_from_settings = !true;
    if (toggle_game_button.innerHTML == "Start") {
        bars_initialization();
        startgame();
        toggle_game_button.innerHTML = "Pause";
    }
}

go_to_menu = () => {
    if (document.getElementById("game_display").style.display == "block") {
        if (toggle_game_button.innerHTML == "Pause") {
            game_session = false;
            toggle_game_button.innerHTML = "Resume";
        }
    }
    document.getElementById("game_display").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("help").style.display = "none";
    
    h2.add("lights");
        
    if (!returning_from_settings) {
    	document.querySelector("footer").style.display = "block";
    } else {
    	document.querySelector("#flower").style.display = "block";
    document.querySelector("article").style.display = "block";
    }

    document.getElementById("menu").style.display = "block";
}

open_settings = () => {
    document.getElementById("game_display").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("help").style.display = "none";
    returning_from_settings = true;
    document.querySelector("article").style.display = "none";
    
    

    document.getElementById("settings").style.display = "block";
    try {
        var controls = JSON.parse(localStorage.controls);
        if (controls.mobile == "longpress") {
            document.getElementById("longpress").click();
        } else {
            document.getElementById("swipecontrol").click();
        }
    } catch (error) {
        console.log(`${error}\n\nFailed to parse controls from your local storage, so recreating controls based on the device resolution... again!`);
    }
}

open_help = () => {
    document.getElementById("game_display").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("settings").style.display = "none";
    
    h2.remove("lights");
    returning_from_settings = !true;

    document.getElementById("help").style.display = "block";
}

toggle_game_button.onclick = () => {
	controller();
	if (toggle_game_button.innerText == "Resume") {
            toggle_game_button.classList.remove("tgbtn_anim");
            document.querySelector("#pauseAnim").style.display ="block";
        } else {
        	toggle_game_button.classList.add("tgbtn_anim");
        document.querySelector("#pauseAnim").style.display ="none";
        }
}

