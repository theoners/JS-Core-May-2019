function solve() {
    let items ={};
    for (const arg of arguments) {
        let type = typeof arg;

        if (!items[type]){
            items[type]=0;
        }
        items[type]++;
        console.log(`${type}: ${arg}`)
    }

    for (const item of Object.keys(items).sort((a,b)=>items[b]-items[a])) {
        console.log(`${item} = ${items[item]}`)
    }
}
solve ({ name: 'bob'}, 3.333, 9.99);