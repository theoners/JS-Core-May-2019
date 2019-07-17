function attachEvents() {
    const loadBtn = document.getElementsByClassName("load")[0];
    const addBtn = document.getElementsByClassName("add")[0];
    loadBtn.addEventListener("click", loadAllCatches);
    addBtn.addEventListener("click", addCatch);

    function addCatch() {
        const angler = document.getElementById("addForm").getElementsByClassName("angler")[0].value;
        const weight = document.getElementById("addForm").getElementsByClassName("weight")[0].value;
        const species = document.getElementById("addForm").getElementsByClassName("species")[0].value;
        const location = document.getElementById("addForm").getElementsByClassName("location")[0].value;
        const bait = document.getElementById("addForm").getElementsByClassName("bait")[0].value;
        const captureTime = document.getElementById("addForm").getElementsByClassName("captureTime")[0].value;

        const currentCatch = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        };

        fetch("https://fisher-game.firebaseio.com/catches.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currentCatch)
        })
            .then(loadAllCatches);
    }

    function loadAllCatches() {
        fetch("https://fisher-game.firebaseio.com/catches.json")
            .then(response => response.json())
            .then(appendAllCatchesToDOM)
    }

    function appendAllCatchesToDOM(data) {
        let counter = 0;
        for (const dataId in data) {
            let catchInfoElement = document.getElementById("catches").firstElementChild.cloneNode(true);
            if (counter === 0) {
                document.getElementById("catches").innerHTML = "";
                counter++;
            }
            catchInfoElement.style.display = "inline-block";
            catchInfoElement.setAttribute("data-id", `${dataId}`);
            for (const catchInfo in data[dataId]) {
                catchInfoElement.getElementsByClassName(`${catchInfo}`)[0].value = data[dataId][catchInfo];
            }
            catchInfoElement.getElementsByClassName("delete")[0].addEventListener("click", deleteCatch);
            catchInfoElement.getElementsByClassName("update")[0].addEventListener("click", updateCatch);
            document.getElementById("catches").appendChild(catchInfoElement);
        }
    }

    function updateCatch(ev) {
        const catchToUpdate = ev.target;

        const catchId = catchToUpdate.parentNode.getAttribute("data-id");
        const angler = catchToUpdate.parentNode.getElementsByClassName("angler")[0].value;
        const weight = catchToUpdate.parentNode.getElementsByClassName("weight")[0].value;
        const species = catchToUpdate.parentNode.getElementsByClassName("species")[0].value;
        const location = catchToUpdate.parentNode.getElementsByClassName("location")[0].value;
        const bait = catchToUpdate.parentNode.getElementsByClassName("bait")[0].value;
        const captureTime = catchToUpdate.parentNode.getElementsByClassName("captureTime")[0].value;

        const currentCatch = {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        };

        fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(currentCatch)
        })
            .then(loadAllCatches);
    }

    function deleteCatch(ev) {
        let currentCatch = ev.target;
        const catchId = currentCatch.parentNode.getAttribute("data-id");
        fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, {
            method: 'DELETE'
        })
            .then(loadAllCatches);
    }
}

attachEvents();

