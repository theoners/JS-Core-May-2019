function solve() {
    let input = document.getElementById("input").value;
    let inputBinaryCode = input.split("");

    while (inputBinaryCode.length !== 1) {
        let sum = 0;
        for (let number of inputBinaryCode) {
            sum += +number;
        }
        inputBinaryCode = sum.toString().split("");
    }
    let sum = Number(inputBinaryCode[0]);
    inputBinaryCode = input.split("");
    for (let i = 0; i < sum; i++) {
        inputBinaryCode.pop();
        inputBinaryCode.shift();
    }
    let result = "";
    while (inputBinaryCode.length !== 0) {
        let currentPart = inputBinaryCode.splice(0, 8);
        let char = String.fromCharCode(parseInt(currentPart.join(""), 2));
        if (char.match(/\w/)) {
            result += char;
        }
    }
    document.getElementById("resultOutput").textContent = result;
    document.getElementsByClassName("boxes")[0].style.display = "flex";
}