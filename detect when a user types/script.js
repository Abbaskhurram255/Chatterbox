let timer,
		timeoutVal = 1000; // time it takes to wait for user to stop typing in ms

const status = document.getElementById('status');
const typer = document.getElementById('typer');

typer.addEventListener('keypress', handleKeyPress);
typer.addEventListener('keyup', handleKeyUp);

// when user is pressing down on keys, clear the timeout
function handleKeyPress(e) {
	window.clearTimeout(timer);
  status.innerHTML = 'Typing...';
}

// when the user has stopped pressing on keys, set the timeout
// if the user presses on keys before the timeout is reached, then this timeout is canceled
function handleKeyUp(e) {
	window.clearTimeout(timer); // prevent errant multiple timeouts from being generated
	timer = window.setTimeout(() => {
  	status.innerHTML = 'All done typing! Do stuff like save content to DB, send WebSocket message to server, etc.';
  }, timeoutVal);