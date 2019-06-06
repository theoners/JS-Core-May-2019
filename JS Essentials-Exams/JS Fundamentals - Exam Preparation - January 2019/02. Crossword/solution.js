function solve() {

    let buttons = Array.from(document.getElementsByTagName("button"));
    let result = document.querySelector("#output p");
    console.log(result);
    for (const button of buttons) {
        button.addEventListener("click", clickEvent);
    }


    function filterEvent(button, input) {
        let filterCommand = button.parentNode.querySelector("#filterSecondaryCmd").value;
        let charPosition = button.parentNode.querySelector("#filterPosition").value;
        switch (filterCommand) {
            case"lowercase":
                result.textContent += input.match(/[a-z]/g)[+charPosition - 1];

                break;
            case"uppercase":
                result.textContent += input.match(/[A-Z]/g)[+charPosition - 1];
                break;
            case"nums":
                result.textContent += input.match(/[0-9]/g)[+charPosition - 1];
                break;
        }
    }

    function sortEvent(button, input) {
        let sortCommand = button.parentNode.querySelector("#sortSecondaryCmd").value;
        let charPosition = button.parentNode.querySelector("#sortPosition").value;
        result.textContent += sortCommand === "A"
            ? [...input].sort((a, b) => a.localeCompare(b))[charPosition - 1]
            : [...input].sort((a, b) => b.localeCompare(a))[charPosition - 1];

    }

    function rotateEvent(button, input) {
        let rotateCount = button.parentNode.querySelector("#rotateSecondaryCmd").value;
        let charPosition = button.parentNode.querySelector("#rotatePosition").value;
        let inputAsArray = [...input];
        for (let i = 0; i < rotateCount % input.length; i++) {
            inputAsArray.unshift(inputAsArray.pop());
        }
        result.textContent += inputAsArray[charPosition - 1];
    }

    function getEvent(button, input) {
        let charPosition = button.parentNode.querySelector("#getPosition").value;
        result.textContent += [...input][charPosition - 1];
    }

    function clickEvent(e) {
        let button = e.target;
        let input = document.getElementById("input").value;
        switch (button.textContent) {
            case"Filter":
                filterEvent(button, input);
                break;
            case"Sort":
                sortEvent(button, input);
                break;
            case"Rotate":
                rotateEvent(button, input);
                break;
            case"Get":
                getEvent(button, input);
                break;
        }
    }
}