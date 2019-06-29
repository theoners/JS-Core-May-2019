function getPerson() {

    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    let people = [];
    addPerson(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    addPerson(new Person('SoftUni'));
    addPerson(new Person('Stephan', 'Johnson', 25));
    addPerson(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return people;

    function addPerson(person) {
        people.push(person);
    }
}