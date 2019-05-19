function solve(input) {
    let object = {};
    for (let i = 0; i <input.length ; i++) {
        let populationsAndTown = input[i].split(" <-> ");

        if (!object[populationsAndTown[0]]) {
            object[populationsAndTown[0]]=0;
        }
        object[populationsAndTown[0]]+=Number(populationsAndTown[1]);

    }

    for (const propName in object) {
        console.log(`${propName} : ${object[propName]}`);
    }
}