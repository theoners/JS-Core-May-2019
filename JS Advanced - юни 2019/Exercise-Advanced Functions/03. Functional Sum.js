function solve(number){
    let sum = number;

    function add(nextNumber) {
        sum += nextNumber;
        return add;
    }

    add.toString = function () {
        return sum;
    };

    return add;
}

console.log(solve(4)(6)(6).toString());