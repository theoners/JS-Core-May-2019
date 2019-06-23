function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName("button"));
    console.log(buttons);
    buttons.forEach(x => x.addEventListener("click", showInfo));

    function showInfo(e) {
        let currentProfile = e.target;
        let hideDiv = currentProfile.parentElement.getElementsByTagName("div")[0];
        let radioBtn = currentProfile.parentElement.querySelectorAll('[type="radio"]');
        if (!radioBtn[0].checked && currentProfile.textContent === "Show more") {

            hideDiv.style.display = "block";
            currentProfile.textContent = "Hide it";
        } else if (!radioBtn[0].checked && currentProfile.textContent === "Hide it") {
            console.log(3);
            hideDiv.style.display = "none";
            currentProfile.textContent = "Show more";
        }
    }
}