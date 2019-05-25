function solve(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] < 0 ? result.unshift(numbers[i]) : result.push(numbers[i]);
    }
    console.log(result.join("\n"));
}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);