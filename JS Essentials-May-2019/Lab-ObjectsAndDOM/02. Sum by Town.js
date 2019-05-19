function sumByTown(input) {
    let townAndIncome={};
    for (let i = 0; i <input.length ; i+=2) {
        if (!townAndIncome[input[i]]){
            townAndIncome[input[i]]=0;
        }
        townAndIncome[input[i]]+=Number(input[i+1]);
    }

    console.log(JSON.stringify(townAndIncome))
}

sumByTown(["Sofia" ,"20", "Varna", "3" ,"Sofia", "5" ,"Varna", "4"]);