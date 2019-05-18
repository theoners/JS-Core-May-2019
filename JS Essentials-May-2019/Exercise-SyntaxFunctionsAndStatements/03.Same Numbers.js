function sameNumber(number) {
    let sum = 0;
    let allDigitsAreSame = true;
    let digit = number%10;

    while(number){
        let lastDigit = number%10;
        sum+=lastDigit;
        number=Math.trunc(number/10);
        if (digit!==lastDigit) {
            allDigitsAreSame=false;
        }
    }

    console.log(allDigitsAreSame);
    console.log(sum);
}

sameNumber(2222222);
sameNumber(1234);
