// Função impura

//Ex 1: está dependendo de dado externo que não foi passado como parâmetro

function calculateCircumference2(radius){
    return Math.PI * (radius + radius)
}

//Ex 2: está alterando um dado externo //ERRADO
let person = {
    name: 'Rafael Camarda',
    age: 'Jovem'
}

function changeName(name){
    person.name = name
}

//Função pura//

//Ex 1
const calculateCircumference1 = function (pi, radius){
    return pi * (radius + radius)
}

//com arrow function
const calculateCircumference = (pi, radius) => pi * (radius + radius)

//Ex 2
const changePersonName = (person, name) => ({...person, name})


console.log(calculateCircumference());