function solve(input) {
    let currentNumber = input[0];
    console.log(currentNumber);
    for (let i = 1; i < input.length; i++) {
        if (currentNumber <= input[i]) {
            console.log(input[i]);
            currentNumber = input[i];
        }
    }
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);