function solve() {

    let liElements = document.getElementsByTagName("li");
    let inputFieldElement = document.getElementsByTagName("input")[0];
    let addButton = document.getElementsByTagName("button")[0];
    addButton.addEventListener("click", onClick);

    function onClick() {
        let names = inputFieldElement.value.split(", ").filter(x => x !== "");
        let liElementIndex = names[0].toUpperCase().charCodeAt(0) - 65;
        for (let i = 0; i < names.length; i++) {
            names[i] = names[i][0].toUpperCase() + names[i].slice(1).toLowerCase();
        }
        if (liElements[liElementIndex].textContent) {
            names.unshift(liElements[liElementIndex].textContent);
        }
        liElements[liElementIndex].textContent = names.join(", ");
    }
}