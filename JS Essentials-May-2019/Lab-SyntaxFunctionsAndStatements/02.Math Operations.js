function mathOperations(firstNumber,secondNumber,operator) {
    let result;
    switch (operator) {
        case"+":
            result=firstNumber+secondNumber;
            break;
        case"-":
            result=firstNumber-secondNumber;
            break;
        case"*":
            result=firstNumber*secondNumber;
            break;
        case"/":
            result=firstNumber/secondNumber;
            break;
        case"%":
            result=firstNumber%secondNumber;
            break;
        case"**":
            result=firstNumber**secondNumber;
            break;
    }
    console.log(result);
}

mathOperations(5,6,"+");