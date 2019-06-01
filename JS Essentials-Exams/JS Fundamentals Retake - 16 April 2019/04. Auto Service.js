function solve(input) {
    let instructions = [];
    let parts = {};

    function repairCar(carSpecifications, model) {
        if (!instructions.includes(model)) {
            console.log(`${model} is not supported`)
        } else {
            for (const part in carSpecifications) {
                if (carSpecifications[part] === "broken") {

                    if (parts[model]&&parts[model][part]) {
                        if (parts[model][part][0]) {
                            carSpecifications[part] = parts[model][part].shift();
                        }
                    }

                }
            }
            console.log(`${model} client - ${JSON.stringify(carSpecifications)}`);
        }
    }

    function addParts(model, part, serialNumber) {
        if (!parts[model]) {
            parts[model] = {};
        }
        if (!parts[model][part]) {
            parts[model][part] = [];
        }
        parts[model][part].push(serialNumber);
    }

    for (let i = 0; i < input.length; i++) {
        let line = input[i];
        let command = line.split(" ")[0];
        let model = line.split(" ")[1];

        if (command === "instructions") {
            instructions.push(model);
        } else if (command === "addPart") {
            let part = line.split(" ")[2];
            let serialNumber = line.split(" ")[3];
            addParts(model, part, serialNumber);
        } else if (command === "repair") {

            let carSpecifications = JSON.parse(line.split(" ")[2]);

            repairCar(carSpecifications, model);
        }
    }

    for (const model of Object.keys(parts).sort((a, b) => a.localeCompare(b))) {

        console.log(`${model} - ${JSON.stringify(parts[model])}`)
    }
}

solve([
        'repair mazda {"engine":"broken"}',
        'instructions bmw',
        'addPart opel engine GV1399SSS'
    ]
);
solve([
        'instructions bmw',
        'addPart opel engine GV1399SSS',
        'addPart opel transmission SMF556SRG',
        'addPart bmw engine GV1399SSS',
        'addPart bmw transmission SMF444ORG',
        'addPart opel transmission SMF444ORG',
        'instructions opel',
        'repair opel {"engine":"broken","transmission":"OP8766TRS"}',
        'repair bmw {"engine":"ENG999FPH","transmission":"broken","wheels":"broken"}'
    ]
);