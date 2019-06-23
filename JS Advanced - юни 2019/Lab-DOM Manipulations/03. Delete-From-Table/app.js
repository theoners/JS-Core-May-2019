function deleteByEmail() {
    let emailForDelete = document.getElementsByTagName("input")[0].value;
    let result = document.getElementById("result");
    let table = document.getElementById("customers");
    let thead = table.getElementsByTagName("thead")[0].getElementsByTagName("th");
    let theadIndex = Array.from(thead).findIndex(x => x.textContent === "Email");
    let tbodyElements = (table.getElementsByTagName("tbody")[0]).getElementsByTagName("td");

    if (!Array.from(tbodyElements).find(x => x.textContent === emailForDelete)) {
        result.textContent = "Not found."
    }
    for (let i = theadIndex; i < tbodyElements.length; i++) {
        if (emailForDelete === tbodyElements[i].textContent &&tbodyElements[i].cellIndex===theadIndex) {
            tbodyElements[i].parentNode.remove();
            result.textContent = "Deleted."
        }
    }
}