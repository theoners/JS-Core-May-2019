function solve() {
    let inputText = document.getElementById("text").value.split(" ").filter(x => x !== "");
    let namingConvention = document.getElementById("naming-convention").value;
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        let word = inputText[i][0].toUpperCase() + inputText[i].slice(1).toLowerCase();
        result += word;
    }
    if (namingConvention === "Camel Case") {
        result = result[0].toLowerCase() + result.slice(1);
    } else if (namingConvention !== "Pascal Case") {
        result = "Error!"
    }
    document.getElementById("result").innerHTML=result;
}