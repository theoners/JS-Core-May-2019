function solve(input) {
    let words = input[0].split(/\W+/).filter(x=>x!=="");

    let object  = {};

    for (let i = 0; i <words.length ; i++) {
        let word = words[i];

        if (!object[word]){
            object[word]=0;
        }
        object[word]++;
    }

    console.log(JSON.stringify(object));
}

solve(["Far too slow, you're far too slow."]);