function solve(array, number) {
    let firstGiant = [];
    let secondGiant = [];
    let damage = array.reduce((a, b) => Math.min(a, b));
    let finalNumber = array.reduce((a, b) => Math.max(a, b));
    let firstPartArray = array.slice(0, array.length / 2);
    let secondPartArray = array.slice(array.length / 2);
    let firstPart = [];
    let secondPart = [];
    for (let i = 0; i < array.length / 2; i += number) {
        firstPart.push(firstPartArray.splice(0, number));
        secondPart.push(secondPartArray.splice(0, number));

    }

    for (let i = 0; i < firstPart.length; i++) {
        firstGiant.push(firstPart[i].reduce((a, b) => a * b, 1));
        secondGiant.push(secondPart[i].reduce((a, b) => a * b, 1));
    }

    firstGiant = (firstGiant.reduce((a, b) => a + b));
    secondGiant = (secondGiant.reduce((a, b) => a + b));
    if (number === 0) {
        firstGiant = 0;
        secondGiant = 0;
    }
    let rounds = 1;
    while (firstGiant > finalNumber && secondGiant > finalNumber && damage !== 0) {
        firstGiant -= damage;
        secondGiant -= damage;
        rounds++;
    }

    if (firstGiant === secondGiant) {
        console.log(`Its a draw ${firstGiant} - ${secondGiant}`)
    } else {
        if (firstGiant > secondGiant) {
            console.log(`First Giant defeated Second Giant with result ${firstGiant} - ${secondGiant} in ${rounds} rounds`);

        } else {
            console.log(`Second Giant defeated First Giant with result ${secondGiant} - ${firstGiant} in ${rounds} rounds`);
        }
    }
}
