function addItem() {
    let text = document.getElementById("newItemText");
    let value = document.getElementById("newItemValue");
    let result = document.getElementById("menu");
    let optionElement = document.createElement("option");
    optionElement.textContent=text.value;
    optionElement.value=value.value;
    result.appendChild(optionElement);
    text.value="";
    value.value="";
}