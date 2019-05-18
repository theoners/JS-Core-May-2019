function solve(coordinates) {
    let x1 = coordinates[0];
    let y1 = coordinates[1];
    let x2 = coordinates[2];
    let y2 = coordinates[3];

    let distance = calculateDistance(x1,y1);
    console.log(`{${x1}, ${y1}} to {0, 0} is ${Result(distance)}`);
    distance = calculateDistance(x2,y2);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${Result(distance)}`);
    distance = calculateDistance(x1-x2,y1-y2);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Result(distance)}`);

    function calculateDistance(x,y) {
        let distance = Math.sqrt(x*x+y*y);
        return distance;
    }

    function Result(distance) {
        let result = "invalid";
        if (distance===Math.trunc(distance)) {
            result = "valid";
        }
        return result;
    }
}

solve([3, 0, 0, 4]);
solve([2, 1, 1, 1]);