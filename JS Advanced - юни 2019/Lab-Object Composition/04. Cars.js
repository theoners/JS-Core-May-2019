function solve(input) {
    let cars = {};
    let createCar = (function () {
        let create = ([name, inherit, parentName]) => {
            if (inherit) {
                cars[name] = Object.create(cars[parentName]);
            } else {
                cars[name] = {};
            }
        };

        let set = ([name, key, value]) => (cars[name][key] = value);
        let print = ([car]) => {
            let properties =[];
            for (let key in cars[car]) {
                properties.push(`${key}:${cars[car][key]}`)
            }
            console.log(properties.join(", "))
        };

        return {create, set, print}
    })();

    for (let element of input) {
        const [command, ...args] = element.split(" ");
        createCar[command](args);
    }
}

solve([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);