function solve(name, age, weight, height) {

    console.log(arguments);
    let person = {
        name: arguments[0],
        "personalInfo": {
            age: age,
            weight: +weight,
            height: +height
        },
        BMI: 0,
        status: ""
    };
    person.BMI = Math.round(person.personalInfo.weight / (Math.pow(person.personalInfo.height, 2) / 10000));
    if (person.BMI <= 18.5) {
        person.status="underweight";
    }else if (person.BMI<25){
        person.status="normal";
    }else if (person.BMI<30){
        person.status="overweight";
    }else {
        person.status="obese";
        person["recommendation"]="admission required";
    }

    return person;
}
