(() => {
    const domElements = {
        template: document.getElementById("monkey-template"),
        body: document.body

    };

    const compiledTemplate = Handlebars.compile(domElements.template.innerHTML);
    domElements.body.innerHTML = compiledTemplate(monkeys);

    domElements.body.addEventListener("click",showInfo);

    function showInfo(ev) {
        const clickedElement = ev.target;
        if (clickedElement.classList.contains("info-btn")) {
            const infoElement = clickedElement.parentNode.lastElementChild;
            const allInfo = Array.from(document.body.getElementsByClassName("info"));
            allInfo.forEach(e=>e.style.display="none");
            infoElement.style.display="block";
        }

    }
})();