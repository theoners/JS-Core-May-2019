function attachEvents() {
    const loadBtn = document.getElementById("btnLoad");
    const createBtn = document.getElementById("btnCreate");
    const phoneBookElement = document.getElementById("phonebook");

    loadBtn.addEventListener("click", loadPhoneBook);
    createBtn.addEventListener("click", addContact);

    function loadPhoneBook() {
        phoneBookElement.innerHTML = "";
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`)
            .then((info) => info.json())
            .then((data) => {
                for (const key of Object.keys(data)) {
                    let liElement = document.createElement("li");
                    const deleteBtn = document.createElement("button");
                    deleteBtn.addEventListener("click", () => deleteContact(key));
                    deleteBtn.textContent = "Delete";
                    liElement.textContent = `${data[key].person}:${data[key].phone}`;
                    liElement.appendChild(deleteBtn);
                    phoneBookElement.appendChild(liElement);

                }
            })
    }

    function addContact() {
        const person = document.getElementById("person").value;
        const phone = document.getElementById("phone").value;
        const data = {
            person,
            phone
        };
        fetch("https://phonebook-nakov.firebaseio.com/phonebook.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(x => x.json())
            .then(() => {
                loadPhoneBook();
            });
    }

    function deleteContact(key) {
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`, {
            method: 'DELETE',
        })
            .then(x => x.json())
            .then(() => {
                loadPhoneBook();
            });
    }
}

attachEvents();