function wordsUppercase(text) {
    let words = text.split(/\W+/);
    console.log(words.filter(x=>x!="").join(", ").toUpperCase());
}

wordsUppercase('Hi, how are you?');