function solve(input) {
    let step = input.pop();
    console.log(input.filter((x,i)=>i%step===0).join("\n"));
}

solve(['5', '20', '31', '4', '20', '2']);