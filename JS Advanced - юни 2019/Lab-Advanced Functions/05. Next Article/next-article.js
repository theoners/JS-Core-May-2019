function getArticleGenerator(input) {
    let counter = 0;
    return function showNext() {
        if (input.length > counter) {
            let p = document.createElement('p');
            p.textContent = input[counter++];

            let article = document.createElement('article');
            article.appendChild(p);
            document.getElementById("content").appendChild(article);
        }
    }
}
