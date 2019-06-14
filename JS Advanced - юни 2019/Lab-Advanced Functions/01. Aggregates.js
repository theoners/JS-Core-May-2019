function solve(input) {
    console.log("Sum = " +`${input.reduce((a,b)=>a+b,0)}`);
    console.log("Min = " +`${Math.min(...input)}`);
    console.log("Max = " +`${Math.max(...input)}`);
    console.log("Product = " +`${input.reduce((a,b)=>a*b,1)}`);
    console.log(input.join(""));
}
solve([2,3,10,5]);