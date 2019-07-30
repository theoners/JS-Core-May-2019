(() => {
    const domElements = {
        template: document.getElementById("cat-template"),
        sectionAllCats: document.getElementById("allCats")
    };
    renderCatTemplate();
    domElements.sectionAllCats.addEventListener("click", showStatusCode);

    function showStatusCode(ev) {
        const clickedElement = ev.target;
        if (clickedElement.classList.contains("showBtn")) {
            const status = clickedElement.parentNode.lastElementChild;
            if (status.style.display === "none"){
                status.style.display = "block" ;
                clickedElement.textContent="Hide status code";
            } else {
                status.style.display = "none" ;
                clickedElement.textContent="Show status code";
            }

        }
    }

    function renderCatTemplate() {
        const compiledTemplate = Handlebars.compile(domElements.template.innerHTML);
        domElements.sectionAllCats.innerHTML = compiledTemplate(cats);
    }
})();
