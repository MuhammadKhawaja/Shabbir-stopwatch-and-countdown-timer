
// StopWatch 

var timer;
var isRunning = false;
var seconds = 0;
var minutes = 0;
var hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").textContent = "Resume";
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTime();
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById("display");
    display.textContent = `${jet(hours)}:${jet(minutes)}:${jet(seconds)}`;
}

function jet(value) {
    return value < 10 ? `0${value}` : value;
}

// Countdown Timer

var timerr;
var totalTime = 300;
var isRunningg = false;

function startTimer() {
    if (!isRunningg) {
        timerr = setInterval(updateTimer, 1000);
        document.getElementById("start").textContent = "Pause";
    } else {
        clearInterval(timerr);
        document.getElementById("start").textContent = "Resume";
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timerr);
    isRunning = false;
    totalTime = parseInt(document.getElementById("durationn").value, 10);
    updateDisplay();
    document.getElementById("start").textContent = "Start";
}

function updateTimer() {
    if (totalTime > 0) {
        totalTime--;
        updateDisplay();
    } else {
        clearInterval(timerr);
        alert("Time's up!");
        document.getElementById("start").textContent = "Start";
        isRunning = false;
    }
}

function updateDisplay() {
    var minutes = Math.floor(totalTime / 60);
    var seconds = totalTime % 60;
    document.getElementById("displayy").textContent = `${pad(minutes)}:${pad(seconds)}`;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}
