function solve(input) {
    let list = [];
    for (const element of input) {
        let [command, string] = element.split(' ');
        command === "add" ? list.push(string)
            : command === "remove" ? list = list.filter(s => s !== string) : console.log(list.join(","));
    }
}
