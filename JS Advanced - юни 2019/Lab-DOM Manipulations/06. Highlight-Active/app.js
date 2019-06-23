function focus() {
    let inputElements = document.getElementsByTagName('input');

    for (const inputElement of inputElements) {
        inputElement.addEventListener('focus', onFocus);
        inputElement.addEventListener('blur', outFocus);
    }

    function onFocus(e) {
        e.target.parentElement.classList.add("focused");
    }

    function outFocus(e) {
        e.target.parentElement.removeAttribute('class');
    }
}