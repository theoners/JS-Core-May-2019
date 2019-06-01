function solve(input) {
    let result = [];
    for (let i = 0; i <input.length ; i++) {
        let htmlRegex = new RegExp(/^<(\w+)>(.+)<(\/\1)>$/);
        if (input[i].match(htmlRegex)){
            result.push(input[i].match(htmlRegex)[0].replace(/<[^>]+>/g,""));
        }
            }
    console.log(result.join(" "));
}
solve(['<div><p>This<p> is</div>',
    '<div><a>perfectly</a></div>',
    '<divs><p>valid</p></divs>',
    '<div><p>This</div></p>',
    '<div><p>is not</p><div>']
);