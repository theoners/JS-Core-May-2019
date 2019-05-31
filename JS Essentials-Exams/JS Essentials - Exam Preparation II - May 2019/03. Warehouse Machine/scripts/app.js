function coffeeStorage() {
    let input = JSON.parse(document.getElementsByTagName("textarea")[0].value);
    let reportSection = document.getElementsByTagName("p")[0];
    let inspectionSection = document.getElementsByTagName("p")[1];
    let storage = {};

    function addCoffee(currentCoffee) {

        if (!storage[currentCoffee.brand]) {
            storage[currentCoffee.brand] = {};
        }
        if (!storage[currentCoffee.brand][currentCoffee.name]) {
            storage[currentCoffee.brand][currentCoffee.name] = currentCoffee;
        } else {
            if (storage[currentCoffee.brand][currentCoffee.name].expireDate < currentCoffee.expireDate) {
                storage[currentCoffee.brand][currentCoffee.name] = currentCoffee;
            } else if (storage[currentCoffee.brand][currentCoffee.name].expireDate === currentCoffee.expireDate) {
                storage[currentCoffee.brand][currentCoffee.name].quantity += currentCoffee.quantity;
            }
        }
    }

    function removeCoffee(currentCoffee) {
        if (storage[currentCoffee.brand] && storage[currentCoffee.brand][currentCoffee.name]) {
            if (storage[currentCoffee.brand][currentCoffee.name].expireDate > currentCoffee.expireDate
                && storage[currentCoffee.brand][currentCoffee.name].quantity >= currentCoffee.quantity) {
                storage[currentCoffee.brand][currentCoffee.name].quantity -= currentCoffee.quantity;
            }
        }
    }

    function report() {
        let result = "";
        for (const brand in storage) {
            let result = `${brand}:`;
            for (const coffee in storage[brand]) {
                result += ` ${storage[brand][coffee].name} - ${storage[brand][coffee].expireDate} - ${storage[brand][coffee].quantity}.`;
            }
            result += "</br>";
            reportSection.innerHTML += result;
        }
    }

    function inspection() {
        let result = "";


        for (const brand of Object.keys(storage).sort((a, b) => a.localeCompare(b))) {
            let result = `${brand}:`;
            for (const coffee of Object.keys(storage[brand])
                .sort((a, b) => storage[brand][b].quantity - storage[brand][a].quantity)) {
                result += ` ${storage[brand][coffee].name} - ${storage[brand][coffee].expireDate} - ${storage[brand][coffee].quantity}.`;
            }
            result += "</br>";
            inspectionSection.innerHTML += result;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let currentLine = input[i].split(", ");
        let command = currentLine[0];
        let brand = currentLine[1];
        let name = currentLine[2];
        let expireDate = currentLine[3];
        let quantity = currentLine[4];
        let currentCoffee = {
            brand,
            name,
            expireDate,
            quantity
        };
        switch (command) {
            case"IN":
                addCoffee(currentCoffee);
                break;
            case "OUT":
                removeCoffee(currentCoffee);
                break;
            case "REPORT":
                report();
                break;
            case"INSPECTION":
                inspection();
                break;
        }
    }
}

