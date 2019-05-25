function solve() {
    let input = document.getElementById("text").value.split(" ");
    let result = document.getElementById("result");
    let output = "";
    for (let i = 0; i < input.length; i++) {
        if (Number(input[i])) {
            output += String.fromCharCode(Number(input[i]));
        } else {
            let charToNum = [];
            for (let j = 0; j < input[i].length; j++) {
                charToNum.push(input[i][j].charCodeAt(0))
            }
            let p = document.createElement("p");
            p.textContent = charToNum.join(" ");
            result.appendChild(p);
        }
    }
    let p = document.createElement("p");
    p.textContent = output;
    result.appendChild(p);
}