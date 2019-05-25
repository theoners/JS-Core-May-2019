function solve(input) {
    let shiftCount = input.pop() % input.length;
    for (let i = 0; i < shiftCount; i++) {
        input.unshift(input.pop());
    }
    console.log(input.join(" "));
}

solve(['1', '2', '3', '4', '2'])