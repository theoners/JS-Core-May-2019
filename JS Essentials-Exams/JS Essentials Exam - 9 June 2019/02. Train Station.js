function solve(capacity, passengers) {
    let totalPassengers = passengers;
    let wagonLength = passengers.length;
    let wagon = [];
    let currentPassengers =0;
    for (let i = 0; i < wagonLength; i++) {
         currentPassengers += totalPassengers.shift();
        if (currentPassengers <= capacity) {
            wagon.push(currentPassengers);
            currentPassengers=0;

        } else  {
            wagon.push(capacity);
           currentPassengers-=capacity;
        }
    }
    if (currentPassengers === 0) {
        console.log(wagon);
        console.log("All passengers aboard");
    } else {
        console.log(wagon);
        console.log(`Could not fit ${currentPassengers} passengers`)
    }
}

solve(10, [9, 39, 1, 0, 0]);
solve(6, [5, 15, 2]);