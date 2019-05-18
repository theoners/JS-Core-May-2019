function objectCalories(input) {
    let obj ={};

    for (let i = 0; i <input.length ; i+=2) {
        obj[input[i]]=Number(input[i+1]);
    }
    console.log(obj);
}

objectCalories(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
objectCalories(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);