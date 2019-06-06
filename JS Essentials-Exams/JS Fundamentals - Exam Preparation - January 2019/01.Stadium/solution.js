function solve() {
    let allSeats = Array.from(document.getElementsByClassName("seat"));
    let output = document.getElementById("output");
    let summary = document.getElementById("summary");
    let totalIncome = 0;
    let fans = 0;
    let allPrice = {
        "Levski": {"A": 10, "B": 7, "C": 5},
        "Litex": {"A": 10, "B": 7, "C": 5},
        "VIP": {"A": 25, "B": 15, "C": 10}
    };
    for (const seat of allSeats) {
        seat.addEventListener("click", clickEvent);
    }

    summary.addEventListener("click", summaryEvent);


    function clickEvent(e) {
        let seat = e.target;
        let zone = seat.parentElement.parentElement.parentElement.parentElement.parentElement.className;
        let sector = String.fromCharCode(seat.parentNode.cellIndex + 65);

        let seatNumber = seat.textContent;
        if (seat.className === "takenSeat") {
            output.textContent += ` Seat ${seatNumber} in zone ${zone} sector ${sector} is unavailable.\n`;
        } else {
            fans++;
            totalIncome += allPrice[zone][sector];
            seat.className = "takenSeat";
            output.textContent += ` Seat ${seatNumber} in zone ${zone} sector ${sector} was taken.\n`
        }

    }

    function summaryEvent() {
        summary.getElementsByTagName("span")[0].textContent = `${totalIncome} leva, ${fans} fans.`;
    }
}