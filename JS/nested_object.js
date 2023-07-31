const person ={
    firstName: "john",
    lastNmae: "Doe",
    age: 30,
    address: {
        styreet: "123 Main Street",
        city: "New York",
        state: "NY",
        zipCode: "10001"
    },
    occupation: "Engineer"
};

console.log(person.firstName);
console.log(person.lastNmae);
console.log(person.age);
console.log(person.occupation);

console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.state);
console.log(person.address.zipCode);