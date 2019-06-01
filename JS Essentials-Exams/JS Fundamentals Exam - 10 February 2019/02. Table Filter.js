function solve(input, commands) {
    let command = commands.split(" ")[0];

    let header = input[0];
    let headerCol = commands.split(" ")[1];
    let index = header.indexOf(headerCol);
    let people = input.slice(1);
    if (command === "sort") {
        people=people.sort((a, b) => a[index].localeCompare(b[index]));
    } else if (command === "hide") {
        header = header.filter(x => x !== headerCol);
        people = people.filter((x=>x.splice(index,1)));
    } else if (command === "filter") {
                let value = commands.split(" ")[2];

        people = people.filter(x => x[index] === value);
    }
    console.log(header.join(" | "));
    people.forEach(x => console.log(x.join(" | ")));

}

solve([['name', 'age', 'grade'],
        ['Peter', '25', '15.00'],
        ['George', '34', '6.00'],
        ['Marry', '28', '5.49']],
    'hide grade'
);
solve([['firstName', 'age', 'grade', 'course'],
        ['Peter', '25', '5.00', 'JS-Core'],
        ['George', '34', '6.00', 'Marry'],
        ['Marry', '28', '5.49', 'Ruby']],
    'filter firstName Marry'
);