function solve() {
    let text = document.getElementById("input").textContent;
    let outputElement = document.getElementById("output");
    let textAsArray = text.split('.').filter(x=>x!=="");

    for (let i = 0; i < textAsArray.length; i += 3) {
        let p = document.createElement("p");

        p.textContent += textAsArray[i] + ".";

        if (textAsArray[i+1]) {
            p.textContent += textAsArray[i+1] + ".";
        }

        if (textAsArray[i+1]) {
            p.textContent += textAsArray[i+2] + ".";
        }

        outputElement.appendChild(p);
    }
}