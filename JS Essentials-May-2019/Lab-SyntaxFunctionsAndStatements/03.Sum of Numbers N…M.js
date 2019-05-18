function sumOfNumbers(startNumber,endNumber) {
    let result=0;
    for (let i = Number(startNumber); i <=Number(endNumber) ; i++) {
        result+=i;
    }

    console.log(result);
}

sumOfNumbers('1', '5' );
sumOfNumbers('-8', '20');