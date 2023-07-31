const person = {
    firstName: "john",
    lastName: "Doe",
    age: 30,
    occupation: "Engineer",
    sayHello: function() {
        console.log('Hello, my name is ${this.firstNmae} ${this.lastNmae}')
    },
};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.occupation);
person.sayHello();
