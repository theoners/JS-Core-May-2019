function solve(input) {
    console.log(input.filter((x,i)=>i!==input.length-1).join(input[input.length-1]));
}

solve(['One', 'Two', 'Three', 'Four', 'Five', '-']);