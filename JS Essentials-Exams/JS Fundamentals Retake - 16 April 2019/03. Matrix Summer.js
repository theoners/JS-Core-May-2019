function solve(firstInput, secondInput) {
    let firstMatrix = firstInput;
    let secondMatrix = secondInput;

    for (let i = 0; i < secondMatrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < secondMatrix[i].length; j++) {
            sum += firstMatrix[i][j] + secondMatrix[i][j];
            if (sum <= 9) {
                firstMatrix[i][j]=sum;
                sum = 0;
            } else {
                firstMatrix[i][j]=9;
                sum -= firstMatrix[i][j];
            }

        }
        while (sum > 0) {
            firstMatrix[i].push(sum < 10 ? sum : 9);
            sum -= 9;
        }
    }
    console.log(JSON.stringify(firstMatrix));
}