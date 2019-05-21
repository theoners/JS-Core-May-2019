function solve() {

    let menuTo = document.getElementById("selectMenuTo");
    let binaryMenu = menuTo.getElementsByTagName("option")[0];
    let secondMenu = binaryMenu.cloneNode(false);
    menuTo.appendChild(secondMenu);
    binaryMenu.value = "binary";
    binaryMenu.textContent = "Binary";
    let hexadecimalMenu = menuTo.getElementsByTagName("option")[1];
    hexadecimalMenu.value = "hexadecimal";
    hexadecimalMenu.textContent = "Hexadecimal";

    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", onClick);

    function onClick() {
        let value = menuTo.options[menuTo.selectedIndex].value;
        let number = Number(document.getElementById("input").value);
        let result = (value === "binary") ? number.toString(2) : number.toString(16);
        document.getElementById("result").value = result.toUpperCase();
    }
}