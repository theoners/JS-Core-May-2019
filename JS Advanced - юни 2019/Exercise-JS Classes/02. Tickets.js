function solve(tickets, sortProperty) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let allTickets = [];

    for (const ticket of tickets) {
        let tokens = ticket.split("|");
        let destination = tokens[0];
        let price = +tokens[1];
        let status = tokens[2];
        let currentTicket = new Ticket(destination, price, status);

        allTickets.push(currentTicket);
    }
    if (sortProperty !== "price") {
        return allTickets.sort((a, b) => a[sortProperty].localeCompare(b[sortProperty]));
    } else {
        return allTickets.sort((a, b) => a[sortProperty] - b[sortProperty]);
    }
}

console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));


console.log(solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'price'));