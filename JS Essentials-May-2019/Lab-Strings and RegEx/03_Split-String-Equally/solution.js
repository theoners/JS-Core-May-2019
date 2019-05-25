function solve() {
    let text = document.getElementById("text").value;
    let number = +document.getElementById("number").value;
    let counter = 0;

    while (text.length % number !== 0) {
        text += text[counter++];
    }
    let splitText = [];
    for (let i = 0; i < text.length; i += number) {
        splitText.push(text.substr(i, number))
    }
    document.getElementById("result").textContent = splitText.join(" ");
}