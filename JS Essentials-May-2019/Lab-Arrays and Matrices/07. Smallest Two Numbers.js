function solve(numbers) {
        console.log(numbers.sort((a, b) => a - b).filter((x,i)=>i<2).join(" "));
}

solve([30, 15, 50, 5]);