function solve() {

    let firstPlayer = document.getElementById("player1Div").children;
    let secondPlayer = document.getElementById("player2Div").children;
    let result = document.getElementById("result");
    let history = document.getElementById("history");
    let firstPlayerCard;
    let secondPlayerCard;

    addEventListener(firstPlayer);
    addEventListener(secondPlayer);

    function addEventListener(collection) {
        for (let i = 0; i < collection.length; i++) {
            collection[i].addEventListener("click", onClick);
        }
    }

    function onClick() {

        this.src = "images/whiteCard.jpg";
        let point = this.name;
        let parentElementId = this.parentElement.id;

        if (parentElementId === "player1Div") {
            result.getElementsByTagName("span")[0].innerHTML = point;
            firstPlayerCard = this;
        } else {
            result.getElementsByTagName("span")[2].innerHTML = point;
            secondPlayerCard = this;
        }

        let firstSpan = Number(result.getElementsByTagName("span")[0].innerHTML);
        let secondSpan = Number(result.getElementsByTagName("span")[2].innerHTML);

        if (firstSpan && secondSpan) {
            if (firstSpan > secondSpan) {
                firstPlayerCard.style.border = "2px solid green";
                secondPlayerCard.style.border = "2px solid red";
            } else {
                firstPlayerCard.style.border = "2px solid red";
                secondPlayerCard.style.border = "2px solid green";
            }

            result.getElementsByTagName("span")[0].innerHTML = "";
            result.getElementsByTagName("span")[2].innerHTML = "";
            history.textContent += `[${firstSpan} vs ${secondSpan}] `;
        }
    }
}