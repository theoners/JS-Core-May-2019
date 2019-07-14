function solve() {
    let currentId = "depot";
    let stopName ="";
    const infoElement = document.getElementById("info");
    const departElement = document.getElementById("depart");
    const arriveElement = document.getElementById("arrive");

    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then((info) => info.json())
            .then((data) => {
                stopName = data.name;
                infoElement.textContent = `Next stop ${stopName}`;
                currentId = data.next;
                departElement.disabled = true;
                arriveElement.disabled = false;
            })
    }

    function arrive() {
        infoElement.textContent=`Arriving at ${stopName}`;
        departElement.disabled = false;
        arriveElement.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();