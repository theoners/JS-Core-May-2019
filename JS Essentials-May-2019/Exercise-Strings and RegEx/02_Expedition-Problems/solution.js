function solve() {
    let keyWord = document.getElementById("string").value;
    let text = document.getElementById("text").value;
    let messageRegex = new RegExp(`${keyWord}(.*)${keyWord}`, "gi");
    let message = `Message: ${messageRegex.exec(text)[1]}`;

    let coordinatesRegex = /(east|north).*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gi;

    let allEast = text.match(coordinatesRegex).filter((x) => x.toLowerCase().startsWith("east"));
    let east = coordinatesRegex.exec(allEast[allEast.length - 1]);
    let eastResult = `${east[2]}.${east[3]} E`;

    let allNorth = text.match(coordinatesRegex).filter((x) => x.toLowerCase().startsWith("north"));
    let north = coordinatesRegex.exec(allNorth[allNorth.length - 1]);
    let northResult = `${north[2]}.${north[3]} N`;

    let pNorth = document.createElement("p");
    pNorth.textContent = northResult;

    let pEast = document.createElement("p");
    pEast.textContent = eastResult;

    let pMessage = document.createElement("p");
    pMessage.textContent = message;
    document.getElementById("result").appendChild(pNorth);
    document.getElementById("result").appendChild(pEast);
    document.getElementById("result").appendChild(pMessage);
}