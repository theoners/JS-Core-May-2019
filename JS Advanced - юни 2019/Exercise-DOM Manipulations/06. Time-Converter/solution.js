function attachEventsListeners() {
    let buttons = {
        daysButton: document.getElementById("daysBtn"),
        hoursButton: document.getElementById("hoursBtn"),
        minutesButton: document.getElementById("minutesBtn"),
        secondsButton: document.getElementById("secondsBtn")
    };

    for (const button in buttons) {
        buttons[button].addEventListener("click", convert)
    }

    function convert(e) {
        let button = e.target;
        let daysInput = document.getElementById("days");
        let hoursInput = document.getElementById("hours");
        let minutesInput = document.getElementById("minutes");
        let secondsInput = document.getElementById("seconds");
        if (button.id === "daysBtn") {
            hoursInput.value = +daysInput.value * 24;
            minutesInput.value = +daysInput.value * (24 * 60);
            secondsInput.value = +daysInput.value * (24 * 60 * 60);
        } else if (button.id === "hoursBtn") {
            daysInput.value = hoursInput.value / 24;
            minutesInput.value = +hoursInput.value * 60;
            secondsInput.value = +hoursInput.value * (60 * 60);
        } else if (button.id === "minutesBtn") {
            daysInput.value = +minutesInput.value / (60 * 24);
            hoursInput.value = +minutesInput.value / 60;
            secondsInput.value = +minutesInput.value * 60;
        } else {
            daysInput.value=+secondsInput.value/(60*60*24);
            hoursInput.value=+secondsInput.value/(60*60);
            minutesInput.value = +secondsInput.value / 60;
        }
    }
}