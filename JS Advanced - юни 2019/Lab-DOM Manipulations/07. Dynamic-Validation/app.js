function validate() {
    let email = document.getElementById('email');
    email.addEventListener("change", checkInput);
    let pattern = /^([a-z]+)@([a-z]+)\.([a-z]+)$/;
    function checkInput(e) {
        let input = e.target;
        if (!pattern.test(input.value)) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    }
}