function townToJSON(input) {
    let tableHeader = input[0].split('|').filter(x=>x!=="");
    let town = tableHeader[0].trim();
    let latitude = tableHeader[1].trim();
    let longitude = tableHeader[2].trim();

    let result = [];
    for (let i = 1; i <input.length ; i++) {
        let row = input[i].split('|').filter(x=>x!=="");

        let currentObject= {
            [town] : row[0].trim(),
            [latitude] : Number(row[1]),
            [longitude] : Number(row[2])
        };
        result.push(currentObject);
    }

    console.log(JSON.stringify(result));
}

townToJSON(['| Town | Latitude | Longitude |','| Sofia | 42.696552 | 23.32601 |','| Beijing | 39.913818 | 116.363625 |']);