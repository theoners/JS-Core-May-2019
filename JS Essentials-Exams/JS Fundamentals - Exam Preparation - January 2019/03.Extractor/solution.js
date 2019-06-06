function solve() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    console.log(input);
    let extract = document.getElementsByTagName("button")[0];

    extract.addEventListener("click", clickEvent);

    function clickEvent() {
        let text = input.value;
        let symbolCount = /^[\d]+/.exec(text)[0];
       text = text.substr(symbolCount.length,+symbolCount);
        let splitChar = text[text.length - 1];
        let textPart = text.split(splitChar).filter(x => x !== "");
        textPart[1] = textPart[1].replace(new RegExp(`[${textPart[0]}]`, "g"), "");
        let result = textPart[1].replace(new RegExp(/[#]/, "g"), " ");
        output.textContent = result;
    }
}