function solve() {
    let data = JSON.parse(document.getElementById("arr").value);
    let regex = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 [0-9] [0-9]{3} [0-9]{3}|\+359-[0-9]-[0-9]{3}-[0-9]{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})/;

    for (let i = 0; i < data.length; i++) {
        if (data[i].match(regex)) {
            let match = regex.exec(data[i]);

            let pName = document.createElement("p");
            pName.textContent = "Name: " + match[1];
            document.getElementById("result").appendChild(pName);

            let pPhone = document.createElement("p");
            pPhone.textContent = "Phone Number: " + match[2];
            document.getElementById("result").appendChild(pPhone);

            let pEmail = document.createElement("p");
            pEmail.textContent = "Email: " + match[3];
            document.getElementById("result").appendChild(pEmail);
        } else {
            let p = document.createElement("p");
            p.textContent = "Invalid data";
            document.getElementById("result").appendChild(p);
        }
        let p = document.createElement("p");
        p.textContent = "- - -";
        document.getElementById("result").appendChild(p);
    }
}