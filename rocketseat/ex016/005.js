const people = ['Rafa', 'Diego', 'Dani', 'Rod']

const upperCasePreopleThatStartsWithD = people
.filter(person => person.startsWith('D'))
.map(dperson => dperson.toUpperCase())



console.log(upperCasePreopleThatStartsWithD);