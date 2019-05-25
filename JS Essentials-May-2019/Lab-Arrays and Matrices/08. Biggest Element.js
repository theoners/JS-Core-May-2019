function solve(numbers) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i].length; j++) {
            if (numbers[i][j] > maxNumber) {
                maxNumber = numbers[i][j]
            }
        }
    }
    console.log(maxNumber);
}

solve([[20, 50, 10], [8, 33, 145]]);