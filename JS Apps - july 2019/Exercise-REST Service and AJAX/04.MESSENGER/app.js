function attachEvents() {
    const url = "https://rest-messanger.firebaseio.com/messanger.json";
    const authorElement = document.getElementById("author");
    const contentElement = document.getElementById("content");
    const messagesElement = document.getElementById("messages");
    const sendBtn = document.getElementById("submit");
    const refreshBtn = document.getElementById("refresh");

    sendBtn.addEventListener("click", sendMessage);
    refreshBtn.addEventListener("click", getAllMessage);

    function sendMessage() {
        const author = authorElement.value;
        const content = contentElement.value;

        const data = {
            author,
            content
        };
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(x => x.json());

        authorElement.value="";
        contentElement.value="";
    }

    function getAllMessage() {
        messagesElement.textContent = "";
        fetch(url)
            .then((info) => info.json())
            .then((data) => {
                for (const key of Object.keys(data)) {
                    messagesElement.textContent += `${data[key].author}:${data[key].content}\n`;

                }
            })
    }

}

attachEvents();