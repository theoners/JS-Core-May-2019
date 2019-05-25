function solve() {
    let searchField = document.getElementById("searchField");
    let searchButton = document.getElementById("searchBtn");
    searchButton.addEventListener("click", onClick);
    let tableElements = document.getElementsByTagName("tbody").item(0).getElementsByTagName("tr");

    function onClick() {
        let text = searchField.value;

        for (let row of tableElements){
            row.removeAttribute("class");
            if (row.textContent.includes(text)){
                row.className="select";
            }
        }
        document.getElementById("searchField").value="";
    }
}