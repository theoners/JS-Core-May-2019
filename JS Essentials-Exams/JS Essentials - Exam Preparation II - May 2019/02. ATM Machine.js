function solve(input) {
    let totalCashInATM = 0;
    let banknotes = [];
    for (let i = 0; i < input.length; i++) {
        let currentArray = input[i];
        if (currentArray.length === 1) {
            let banknoteValue = currentArray[0];
            let count = 0;
            if (banknotes.length !== 0)
                for (let j = 0; j < banknotes.length; j++) {
                    if (banknotes[j] === banknoteValue) {
                        count++;
                    }
                }
            console.log(`Service Report: Banknotes from ${banknoteValue}$: ${count}.`)

        } else if (currentArray.length === 2) {
            let currentBalance = currentArray[0];
            let money = currentArray[1];
            if (currentBalance < money) {
                console.log(`Not enough money in your account. Account balance: ${currentBalance}$.`);

            } else if (totalCashInATM < money) {
                console.log("ATM machine is out of order!");
            } else {
                currentBalance -= money;
                totalCashInATM -= money;
                banknotes=banknotes.sort((a, b) => b - a);
                for (let j = 0; j < banknotes.length; j++) {
                    if (banknotes[j] <= money) {
                        money -= banknotes[j];
                         banknotes[j]=0;


                    }if (money === 0) {
                        banknotes= banknotes.filter(x=>x!==0);
                        break;
                    }
                }
                console.log(`You get ${currentArray[1]}$. Account balance: ${currentBalance}$. Thank you!`)
            }

        } else {
            currentArray.forEach(x => banknotes.push(x));
            let insertedCash = currentArray.reduce((a, b) => a + b,0);

            totalCashInATM += insertedCash;
            console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${totalCashInATM}$.`);
        }
    }
}