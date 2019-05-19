function solve() {

    let linkElements = document.getElementsByClassName('link-1');

    for (let i = 0; i <linkElements.length ; i++) {
        linkElements[i].addEventListener('click',onClick)
    }

    function onClick() {
        let pElement =this.getElementsByTagName('p')[0];
        let text =  pElement.textContent.split(" ");
        Number(text[1]++);

        this.getElementsByTagName('p')[0].textContent=text.join(" ");
    }
}