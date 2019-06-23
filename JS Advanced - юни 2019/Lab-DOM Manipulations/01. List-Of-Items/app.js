function addItem() {
    let newItem = `<li>${(document.getElementById("newItemText").value)}</li>`;
    document.getElementById("items").innerHTML+=newItem ;
}