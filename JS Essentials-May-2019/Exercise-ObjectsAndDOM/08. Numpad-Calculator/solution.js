function solve() {

    let buttonElements = document.getElementsByTagName("button");
    let expressionOutputElement = document.getElementById("expressionOutput");
    let resultOutputElement = document.getElementById("resultOutput");
    for (let i = 0; i < buttonElements.length; i++) {
        buttonElements[i].addEventListener("click", onClick);
    }

    function onClick() {
        if (this.value !== "=" && this.value !== "Clear") {
            if (this.value === '/' || this.value === '-' || this.value === '*' || this.value === '+') {
                expressionOutputElement.textContent += ` ${this.value} `;
            } else {
                expressionOutputElement.textContent += this.value;
            }

        } else if (this.value === "Clear") {
            expressionOutputElement.textContent = "";
            resultOutputElement.textContent = "";
        } else {
            let resultString = expressionOutputElement.textContent;
            let numbers = resultString.match(/\d*\.*\d+/g);
            let operators = resultString.match(/[\+\*\-\/]/g);
            let result = Number(numbers[0]);
            if (operators) {
                for (let i = 0; i < operators.length; i++) {
                    let operator = operators[i];
                    let number = Number(numbers[i + 1]);
                    switch (operator) {
                        case"+":
                            result += number;
                            break;
                        case"-":
                            result -= number;
                            break;
                        case"*":
                            result *= number;
                            break;
                        case"/":
                            result /= number;
                            break;
                    }

                }
            }
            resultOutputElement.textContent = result;

        }
    }
}