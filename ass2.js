//Assignment 2 array operation
//create an empty object called person
let person={}
console.log(person)
//add properties name,age,city
person={
     name: "John",
     age: 30,
     city: "New York",
}
console.log(person)
//remove age property 
delete person.age
console.log(person)
//adding new value called job value engineer
person.job="Engineer"
console.log(person)
//update city with san franssioco
person.city="San Francisco"
//print final value
console.log(person)