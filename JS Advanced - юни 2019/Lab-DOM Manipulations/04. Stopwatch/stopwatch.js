function stopwatch() {
    let time = {minutes: 0, seconds: 0};
    let clock;
    let timeElement = document.getElementById('time');
    let startButton = document.getElementById('startBtn');
    startButton.addEventListener('click', start);

    let stopButton = document.getElementById('stopBtn');
    stopButton.addEventListener('click', stop);

    function start() {
        timeElement.textContent = "00:00";
        startButton.disabled = true;
        stopButton.disabled = false;

        clock = setInterval(() => {
            time.seconds++;
            if (time.seconds === 60) {
                time.seconds = 0;
                time.minutes++;
            }
            timeElement.textContent = (time.minutes <= 9 ? "0" + time.minutes : time.minutes) + ":" + (time.seconds <= 9 ? "0" + time.seconds : time.seconds);
        }, 1000);
    }

    function stop() {
        clearInterval(clock);
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}