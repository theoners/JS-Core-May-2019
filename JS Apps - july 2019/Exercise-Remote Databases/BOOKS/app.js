const user = {
    appId: "kid_ByrOenJGB",
    appSecret: "353a60e41e46455d98d06960649f0f18",
    username: "admin",
    password: "admin",

};
const URL = `https://baas.kinvey.com/appdata/${user.appId}/books`;
const AUTH = {
    "Authorization": 'Basic ' + btoa(user.username + ':' + user.password),
    "Content-type": "application/json",
};

const DOMElements = {
    loadBtn: document.getElementById("loadBooks"),
    submitBtn: document.getElementById("submitBook"),
    tableBodyElement: document.getElementsByTagName("tbody")[0],
    titleInputElement: document.getElementById("title"),
    authorInputElement: document.getElementById("author"),
    isbnInputElement: document.getElementById("isbn"),

};

DOMElements.loadBtn.addEventListener("click", loadBooks);
DOMElements.submitBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    createBook();
});

function loadBooks() {
    DOMElements.tableBodyElement.innerHTML = "";

    fetch(URL, {
        headers: AUTH
    })
        .then(response => response.json())
        .then(data => {
            data.forEach(book => createTrElement(book))
        })
}

function createBook() {
    const book = {
        title: DOMElements.titleInputElement.value,
        author: DOMElements.authorInputElement.value,
        isbn: DOMElements.isbnInputElement.value
    };

    fetch(URL, {
        method: "POST",
        headers: AUTH,
        body: JSON.stringify(book)
    })
        .then(clearInputFields)
        .then(loadBooks)
}

function createTrElement(book) {
    let trElement = document.createElement('tr');

    trElement.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>`;
    trElement.setAttribute("id", book._id);
    const editBtn = trElement.getElementsByTagName("button")[0];
    const deleteBtn = trElement.getElementsByTagName("button")[1];

    deleteBtn.addEventListener("click", deleteBook);
    editBtn.addEventListener("click", editBook);

    DOMElements.tableBodyElement.appendChild(trElement);
}

function deleteBook(ev) {
    const id = ev.target.parentNode.parentNode.id;

    fetch(URL + "/" + id, {
        method: "DELETE",
        headers: AUTH,
    }).then(loadBooks)
}

function editBook(ev) {
    const id = ev.target.parentNode.parentNode.id;
    const book = {
        title: DOMElements.titleInputElement.value,
        author: DOMElements.authorInputElement.value,
        isbn: DOMElements.isbnInputElement.value
    };
    fetch(URL + "/" + id, {
        method: "PUT",
        headers: AUTH,
        body: JSON.stringify(book)
    })
        .then(clearInputFields)
        .then(loadBooks)
}

function clearInputFields() {
    DOMElements.titleInputElement.value = "";
    DOMElements.authorInputElement.value = "";
    DOMElements.isbnInputElement.value = "";
}