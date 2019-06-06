function solve() {

    let buttons = Array.from(document.getElementsByTagName("button"));
    let backupTiresSet = document.getElementsByTagName("fieldset")[3];
    backupTiresSet.removeChild(backupTiresSet.children[1]);
    let trucksInfo = document.getElementsByTagName("fieldset")[4];
    let report = document.getElementsByTagName("textarea")[0];
    let trucks = [];
    let backupTires = [];


    for (const button of buttons) {
        button.addEventListener("click", clickEvent);
    }

    function addNewTruck() {
        let plateNumber = document.getElementById("newTruckPlateNumber").value;
        let tiresCondition = document.getElementById("newTruckTiresCondition").value.split(" ").map(Number);
        let truck = {
            plateNumber,
            tiresCondition,
            distance: 0
        };
        if (!trucks.find(x => x.plateNumber === plateNumber)) {
            trucks.push(truck);
            let div = document.createElement("div");
            div.className = "truck";
            div.textContent = truck.plateNumber;
            trucksInfo.appendChild(div);
        }
    }

    function addNewTires() {
        let tireSet = document.getElementById("newTiresCondition").value.split(" ");
        backupTires.push(tireSet);
        let div = document.createElement("div");
        div.className = "tireSet";
        div.textContent = tireSet.join(" ");
        backupTiresSet.appendChild(div);
    }

    function goToWork() {
        let plateNumber = document.getElementById("workPlateNumber").value;
        let distance = Number(document.getElementById("distance").value);
        if (trucks.find(x => x.plateNumber === plateNumber)) {
            let currentTruck = trucks.find(x => x.plateNumber === plateNumber);
            let tireMinValue = Math.min(...currentTruck.tiresCondition);
            let needTireValue = Math.floor(distance / 1000);
            if (tireMinValue >= needTireValue) {
                currentTruck.distance += distance;
                currentTruck.tiresCondition = currentTruck.tiresCondition.map(x => x - needTireValue);
            } else {
                currentTruck.tiresCondition = backupTires.shift();
                backupTiresSet.removeChild(backupTiresSet.children[1]);
                let nextTireMinValue = Math.min(...currentTruck.tiresCondition);
                if (nextTireMinValue >= needTireValue) {
                    currentTruck.distance += distance;
                    currentTruck.tiresCondition = currentTruck.tiresCondition.map(x => x - needTireValue);
                }
            }
        }
    }

    function result() {

        for (const truck of trucks) {

            let message = `Truck ${truck.plateNumber} has traveled ${truck.distance}.\n`;
            report.textContent += message;
        }
        report.textContent += `You have ${backupTires.length} sets of tires left.\n`;
    }

    function clickEvent(e) {
        let command = e.target;
        switch (command.textContent) {
            case"Add new truck":
                addNewTruck(command);
                break;
            case"Add new tires":
                addNewTires();
                break;
            case"Go to work":
                goToWork();
                break;
            case"End of the shift":
                result();
                break;

        }
    }
}