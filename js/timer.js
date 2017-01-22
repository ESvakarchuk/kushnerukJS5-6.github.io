var startButton = document.getElementById('startPause'),
    clearBtn = document.getElementById('clearButton'),
    displayMillisec = document.getElementById('milisec'),
    displayTime = document.getElementById('output'),
    counter = 0,
    hour1 = 0,
    hour2 = 0,
    minute1 = 0,
    minute2 = 0,
    second1 = 0,
    second2 = 0,
    millisecond1 = 0,
    millisecond2 = 0,
    clearPress = true;

function displayFunction() {
    counter++;
    displayTime.innerHTML = '' + hour2 + hour1 + ':' + minute2 + minute1 + ':' + second2 + second1;
    displayMillisec.innerHTML = '' + millisecond2 + millisecond1 + counter;

    if (counter >= 9) {
        counter = 0;
        millisecond1++;
        if (millisecond1 > 9) {
            millisecond1 = 0;
            millisecond2++;
            if (millisecond2 > 9) {
                millisecond2 = 0;
                second1++;
                if (second1 > 9) {
                    second1 = 0;
                    second2++;
                    if (second2 > 5) {
                        second2 = 0;
                        minute1++;
                        if (minute1 > 9) {
                            minute1 = 0;
                            minute2++;
                            if (minute2 > 5) {
                                minute2 = 0;
                                hour1++;
                                if (hour1 > 9) {
                                    hour1 = 0;
                                    hour1++;
                                    if (hour2 > 23) {
                                        clearInterval(timer);
                                        startPauseFunction();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


function resetFunction() {
    clearInterval(timer);
    counter = 0;
    millisecond1 = 0;
    millisecond2 = 0;
    second1 = 0;
    second2 = 0;
    minute1 = 0;
    minute2 = 0;
    hour1 = 0;
    hour2 = 0;
    clearPress = true;
    displayTime.innerHTML = '' + hour2 + hour1 + ':' + minute2 + minute1 + ':' + second2 + second1;
    displayMillisec.innerHTML = '' + millisecond2 + millisecond1 + counter;
    startButton.className = 'start_button_color';
    startButton.innerHTML = 'Start';
}

function startPauseFunction() {
    if (clearPress === true) {
        timer = setInterval(displayFunction, 1);
        startButton.className = 'pause_button_color';
        startButton.innerHTML = 'Pause';
        clearPress = false;
    } else {
        clearTimeout(timer);
        clearPress = true;
        startButton.className = 'start_button_color';
        startButton.innerHTML = 'Start';
    }
}

startButton.addEventListener('click', startPauseFunction);
clearBtn.addEventListener('click', resetFunction);
