function solve(numbers) {
       console.log(numbers.filter((x, i) => i % 2 === 1).reverse().map(x=>x*2).join(" "));
}

solve([10, 15, 20, 25]);