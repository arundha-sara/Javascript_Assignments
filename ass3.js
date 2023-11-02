//Assignment 3: Array of Objects 
//Create an empty array called cars 
let cars = []
console.log(cars)
//2.Add 3 objects with properties make,model and year
cars =[
    
    {make:'Toyota',model:'Camry',year:'2018'},
    {make:'Toyota',model:'Innova Crysta',year:'2021'},
    {make:'Mahindra',model:'XUV 300',year:'2019'},
]
console.log(cars)
//remove first car in the object.
cars.splice(0,1)
console.log(cars)
//add new car for the object name civic make:honda,year:2020
cars.push({make:'Honda',model:'Civic',year:'2020'})
console.log(cars)
//update the model of second car to accord 
cars[1]='Accord'
console.log(cars)