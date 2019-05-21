function solve() {
    let answerElements = Array.from(document.getElementsByClassName("answer-text"));
    let sectionElements = document.getElementsByTagName("section");
    let resultElement = document.getElementsByClassName("results-inner");
    let currentSection = 1;
    let points = 0;

    for (let answer of answerElements) {
        answer.addEventListener("click", onClick);
    }

    function onClick() {
        if (currentSection === 1) {
            if (this.textContent === "onclick") {
                points++;
            }
            sectionElements[0].style.display = "none";
            sectionElements[1].style.display = "block";
            currentSection++;
        } else if (currentSection === 2) {

            if (this.textContent === "JSON.stringify()") {
                points++;
            }
            sectionElements[1].style.display = "none";
            sectionElements[2].style.display = "block";
            currentSection++;
        } else {
            sectionElements[2].style.display = "none";
            if (this.textContent === "A programming API for HTML and XML documents") {
                points++;
            }

            if (points === 3) {
                resultElement.item(0).getElementsByTagName("h1")[0].textContent = "You are recognized as top JavaScript fan!";

            } else {
                resultElement.item(0).getElementsByTagName("h1")[0].textContent = `You have ${points} right answers`;
            }
            document.getElementById("results").style.display = "block";
        }
    }
}
