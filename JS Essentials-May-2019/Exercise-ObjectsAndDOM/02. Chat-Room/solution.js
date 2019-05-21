function solve() {
    let sendButton = document.getElementById("send");
    let inputArea = document.getElementById("chat_input");
    let myMessage = document.getElementById("chat_messages");
    sendButton.addEventListener("click",onClick);

    function onClick() {
        if (inputArea.value){
            let text = inputArea.value;
            let div = document.createElement("div");
            div.className="message my-message";
            div.textContent=text;
            myMessage.appendChild(div);
            inputArea.value="";
        }
    }
}


