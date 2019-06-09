function solve(days) {
    let drinks = {
        coffee: 40,
        cocaCola: 8,
        tea: 20,
        energy: 30

    };
    let result = 0;

    for (let i = 1; i <= days; i++) {
        let morning = 3 * 150 * drinks.coffee;
        let lunch = 2*250 * drinks.cocaCola;
        let brunch = 350 * 3 * drinks.tea;
        if (i%5===0){
            let fifthDay = 3*500*drinks.energy;
            result+=fifthDay;
        }
        if (i%9===0){
            let dayNine = 4*250*drinks.cocaCola+2*500*drinks.energy;
            result+=dayNine;
        }
        result +=morning+lunch+brunch;
    }

    console.log(`${result/100} milligrams of caffeine were consumed`)
}

solve(5);
solve(8);