function solve(array) {
    let coffeeMachinePrice={
        "coffee caffeine":0.80,
        "coffee decaf":0.90,
        "tea":0.80
    };
    let totalIncome =0;
    for (let i = 0; i <array.length ; i++) {

        let input=array[i].split(", ");
        let price = 0;
        let coins = Number(input[0]);
        let typeOfDrink = input[1];
        if (typeOfDrink === "coffee") {
            typeOfDrink += " " + input[2];
        }
        price += +coffeeMachinePrice[typeOfDrink];

        if (input.includes("milk")) {
            price += 0.1;
        }

        if (input[input.length-1]!=="0") {
            price+=0.1;

        }

        if (coins>=price){
            totalIncome+=price;
            console.log(`You ordered ${input[1]}. Price: $${price.toFixed(2)} Change: $${(coins-price).toFixed(2)}`);
        }else{
            console.log(`Not enough money for ${input[1]}. Need $${(price-coins).toFixed(2)} more.`);
        }
    }
    console.log(`Income Report: $${totalIncome.toFixed(2)}`);
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
solve(['8.00, coffee, decaf, 4', '1.00, tea, 2']);