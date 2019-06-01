function solve(priceWithVAT , VAT) {
    console.log((priceWithVAT/(1+VAT/100)).toFixed(2));
}

solve(210,10);