function getInfo() {
    const stopId = document.getElementById("stopId").value;
    const stopNameElement = document.getElementById("stopName");
    const busesElement = document.getElementById("buses");
    busesElement.textContent = "";
    fetch(`https://judgetests.firebaseio.com/businfo/${stopId}.json `)
        .then((info) => info.json())
        .then((data) => {
            stopNameElement.textContent = data.name;
            const buses = Object.entries(data.buses);

            buses.forEach(([busId, time]) => {
                let liElement = document.createElement("li");
                liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
                busesElement.appendChild(liElement);
            })
        })
        .catch((error) => stopNameElement.textContent = "Error");

}