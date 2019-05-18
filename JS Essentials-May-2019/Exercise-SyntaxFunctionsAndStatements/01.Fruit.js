function calculateFruitPrice(fruit,weight, price) {
    let weightInKg = weight/1000;
    let money = price*weightInKg;
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`);
}

calculateFruitPrice('orange', 2500, 1.80);