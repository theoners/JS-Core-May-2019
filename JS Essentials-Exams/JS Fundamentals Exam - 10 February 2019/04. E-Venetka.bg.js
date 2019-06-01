function solve(input) {
    let result = {};
    let town = {};
    let cars = {};
    for (const car of input) {
        if (!result[car.town]) {
            result[car.town] = {};
            town[car.town] = [];
            cars[car.town]={};
        }
        if (!result[car.town][car.model]) {
            result[car.town][car.model] = [];
            cars[car.town][car.model]=[];
        }
        result[car.town][car.model].push(car.regNumber);
        town[car.town].push(car.price);
        cars[car.town][car.model].push(car.price);

    }

    let resultTown = Object.keys(town).sort((a, b) => town[b].reduce((a, b) => a + b) - town[a].reduce((a, b) => a + b)
        || town[a].length - town[b].length || a.localeCompare(b))[0];

    let profit = town[resultTown].reduce((a, b) => a + b);

    let modelResult = Object.keys(cars[resultTown]).sort((a, b) => cars[resultTown][a].length - cars[resultTown][b].length||
    Math.max(cars[resultTown][b])- Math.max(cars[resultTown][a])
        ||a.localeCompare(b))[0];

    console.log(`${resultTown} is most profitable - ${profit} BGN`);
    console.log(`Most driven model: ${modelResult}`);

    for (const town of Object.keys(result).sort((a, b) => a.localeCompare(b))) {
        if (result[town][modelResult]) {
            console.log(`${town}: ${result[town][modelResult].sort((a,b)=>a.localeCompare(b)).join(", ")}`)
        }
    }
}


solve([{model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
        {model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
        {model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
        {model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
        {model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3},

    ]
);