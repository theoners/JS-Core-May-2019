(function solve() {
    const domElements = {
        loadBtn: document.getElementById("btnLoadTowns"),
        inputField: document.getElementById("towns"),
        townTemplate: document.getElementById("towns-template"),
        divElementRoot: document.getElementById("root"),
    };

    domElements.loadBtn.addEventListener("click", (e) => {
        e.preventDefault();
        loadTowns()
    });

    function loadTowns() {
        const towns = document.getElementById('towns').value.split(", ");
        const compiledTemplate = Handlebars.compile(domElements.townTemplate.innerHTML);
        domElements.divElementRoot.innerHTML = compiledTemplate(towns);
    }
})();