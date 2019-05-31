function getData() {
    let input = JSON.parse(document.getElementsByTagName("textarea")[0].value);
    let peopleInElement = document.querySelector("#peopleIn p");
    let peopleOutElement = document.querySelector("#peopleOut p");
    let blacklistElement = document.querySelector("#blacklist p");
    let peopleInList = [];
    let peopleOutList = [];
    let blacklist = [];

    for (let i = 0; i < input.length - 1; i++) {
        let currentPerson = {firstName: input[i].firstName, lastName: input[i].lastName};
        let command = input[i].action;
        if (command === "peopleIn") {
            let personInBlacklist = blacklist
                .find(p => p.firstName === currentPerson.firstName && p.lastName === currentPerson.lastName);
            if (!personInBlacklist) {
                peopleInList.push(currentPerson);

            }
        } else if (command === "peopleOut") {
            let personInList = peopleInList
                .find(p => p.firstName === currentPerson.firstName && p.lastName === currentPerson.lastName);

            if (personInList) {
                peopleInList.splice(peopleInList.indexOf(personInList), 1);
                peopleOutList.push(currentPerson);
            }
        } else if(command === "blacklist"){
            blacklist.push(currentPerson);
            let personInList = peopleInList
                .find(p => p.firstName === currentPerson.firstName && p.lastName === currentPerson.lastName);

            if (personInList) {
                peopleInList.splice(peopleInList.indexOf(personInList), 1);
                peopleOutList.push(currentPerson);
            }
        }
    }
    let sortCriteria = input[input.length - 1]["criteria"];
    let listName = input[input.length - 1]["action"];
    if (sortCriteria === "firstName" || sortCriteria === "lastName") {
        if (listName === "peopleIn") {
            peopleInList.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        } else if (listName === "peopleOut") {
            peopleOutList.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        } else if (listName === "blacklist") {
            blacklist.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        }
    }
    peopleInList.forEach(x => peopleInElement.textContent += JSON.stringify(x) + " ");
    peopleOutList.forEach(x => peopleOutElement.textContent += JSON.stringify(x) + " ");
    blacklist.forEach(x => blacklistElement.textContent += JSON.stringify(x) + " ");
}