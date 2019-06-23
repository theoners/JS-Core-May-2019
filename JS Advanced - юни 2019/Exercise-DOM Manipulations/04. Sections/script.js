function create(words) {
    let content = document.getElementById("content");
    for (let i = 0; i < words.length; i++) {
        let divElement = document.createElement("div");
        let pElement = document.createElement("p");
        pElement.textContent=words[i];
        pElement.style.display="none";
        divElement.appendChild(pElement);
        content.appendChild(divElement);
    }
    let divElements = Array.from(content.children);

    divElements.forEach(x=>x.addEventListener("click",show));

    function show(e) {
        let currentElement = e.target;
        currentElement.firstElementChild.style.display="block";
    }
}