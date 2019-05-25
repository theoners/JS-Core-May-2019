function solve() {
    let word = document.getElementById("word").value;
    let array = JSON.parse(document.getElementById("text").value);
    let wordForReplace = array[0].split(" ")[2];

    for (let i = 0; i < array.length; i++) {
        array[i]=array[i].replace(new RegExp(wordForReplace, 'gi'), word);
        let p = document.createElement("p");
        p.textContent=array[i];
        document.getElementById("result").appendChild(p);
    }
}