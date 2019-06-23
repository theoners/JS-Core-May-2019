function addItem() {
    let liElement = document.createElement("li");
    liElement.textContent = document.getElementById("newText").value;
    let deleteLink = document.createElement("a");
    deleteLink.textContent="[Delete]";
    deleteLink.href="#";
    liElement.appendChild(deleteLink);
    deleteLink.addEventListener("click", (e)=>{e.target.parentNode.remove()});

    document.getElementById("items").appendChild(liElement);
}


