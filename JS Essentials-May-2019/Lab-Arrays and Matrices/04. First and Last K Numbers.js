function solve(numbers){
    let k = numbers[0];
    console.log(numbers.slice(1, k+1).join(" "));
    console.log(numbers.slice(numbers.length-k,numbers.length).join(" "));
}

solve([2, 7, 8, 9]);
solve([3, 6, 7, 8, 9]);