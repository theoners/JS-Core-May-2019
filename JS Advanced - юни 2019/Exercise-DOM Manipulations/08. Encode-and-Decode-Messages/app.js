function encodeAndDecodeMessages() {
    let buttons = Array.from(document.getElementsByTagName("button"));

    buttons[0].addEventListener("click", decodeMessage);
    buttons[1].addEventListener("click", encodeMessage);

    function decodeMessage(e) {
        let currentElement = e.target.parentElement.children[1];
        let message = currentElement.value;
        let decodeMessage = "";
        for (let i = 0; i < message.length; i++) {
            let currentChar = String.fromCharCode((message[i].charCodeAt(0) + 1));
            decodeMessage += currentChar;
        }
        currentElement.value="";
        document.getElementsByTagName("textarea")[1].textContent = decodeMessage;
    }

    function encodeMessage(e) {
        let decodeMessage = e.target.parentElement.children[1].value;
        let message = "";
        for (let i = 0; i < decodeMessage.length; i++) {
            let currentChar = String.fromCharCode((decodeMessage[i].charCodeAt(0) - 1));
            message += currentChar;
        }
        document.getElementsByTagName("textarea")[1].textContent = message;
    }
}