let words = ["DOOR", "WINDOW", "JAVASCRIPT", "SOFTUNI", "MICROSOFT"];

function play() {
    let gameStartButton = document.getElementsByClassName("game-start")[0];
    gameStartButton.style.display = "none";
    let letterCounter = 2;
    let gameArea = document.getElementsByClassName("game-area")[0];
    gameArea.innerHTML="";
    gameArea = document.getElementsByClassName("game-area")[0];

    let letters = Array.from(document.getElementsByClassName("key-letter"));
    let randomIndex=  Math.floor(Math.random() * 4);
    let randomWord = words[randomIndex];
    let man = document.createElement("div");
    man.className = "man";
    gameArea.appendChild(man);
    let wordElement = document.createElement("div");
    wordElement.className = "charBox";
    gameArea.appendChild(wordElement);
    let charBox = document.getElementsByClassName("charBox")[0];

    for (let i = 0; i < randomWord.length; i++) {
        let char = document.createElement("div");
        if (i === 0) {
            char.textContent = randomWord[0];
        }
        if (i === randomWord.length - 1) {
            char.textContent = randomWord[randomWord.length - 1];
        }
        charBox.appendChild(char);
    }
    document.getElementsByClassName("keyboard")[0].style.display = "inline";

    for (const letter of letters) {
        letter.style.background = "#333";
        letter.addEventListener("click", getLetter);
    }

    function getLetter(e) {

        let letter = e.target.textContent;
        if (e.target.style.background === "red") {
            return;
        }
        e.target.style.background = "red";
        let substring = randomWord.substr(1, randomWord.length - 2);
        if (substring.indexOf(letter) !== -1) {
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] === letter) {
                    let charBox = document.querySelectorAll(".charBox div");
                    charBox[i].textContent = letter;
                    letterCounter++;
                    if (letterCounter === randomWord.length) {
                        gameStartButton.textContent = "Next Word";
                        gameStartButton.style.display = "inline-block";
                    }
                }
            }

        } else {
            let man = document.getElementsByClassName("man")[0];
            let currentPixels = man.style.width.slice(0, -2);
            man.style.width = `${+currentPixels + 75}px`;
            if (man.style.width === "525px") {
                gameStartButton.textContent = "Play Again";
                gameStartButton.style.display = "inline-block";
            }
        }
    }

}