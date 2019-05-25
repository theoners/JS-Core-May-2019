function solve(input) {
    let result = [];
    let number = 1;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "add") {
            result.push(number++);
        } else {
            result.pop();
            number++;
        }
    }
    console.log(result.length!==0 ? result.join("\n") : "Empty");
}

solve(['add', 'add', 'add', 'add']);
solve(['remove', 'remove', 'remove']);