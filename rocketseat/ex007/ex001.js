function myFunction(key) {
    return key > 100 || key < 0 ? 'Nota inválida' : key >= 90 ? 'A' : key >= 80 ? 'B' : key >= 70 ? 'C' : key >= 60 ? 'D' : 'F'

}

console.log("A nota " + 101 + " equivale a nota: " + myFunction(101))
console.log("A nota " + 90 + " equivale a nota: " + myFunction(90))
console.log("A nota " + 80 + " equivale a nota: " + myFunction(80))
console.log("A nota " + 70 + " equivale a nota: " + myFunction(70))
console.log("A nota " + 60 + " equivale a nota: " + myFunction(60))
console.log("A nota " + 50 + " equivale a nota: " + myFunction(50))
console.log("A nota " + -1 + " equivale a nota: " + myFunction(-1))
