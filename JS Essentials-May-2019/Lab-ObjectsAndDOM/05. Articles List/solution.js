function createArticle() {

    let titleElement = document.getElementById("createTitle").value;
    let textElement = document.getElementById("createContent").value;

    let articlesList = document.getElementById("articles");

    if (titleElement && textElement) {
        let articleElement = document.createElement("article");

        let h3 = document.createElement("h3");
        h3.textContent = titleElement;

        let p = document.createElement("p");
        p.textContent = textElement;

        articleElement.appendChild(h3);
        articleElement.appendChild(p);
        articlesList.appendChild(articleElement);
    }

    document.getElementById("createTitle").value = "";
    document.getElementById("createContent").value = "";

}