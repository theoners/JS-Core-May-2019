function circleArea(radius) {
    let result;
    if (typeof radius === "number") {
        result = Math.pow(radius, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof radius}.`);
    }
}

circleArea(5);