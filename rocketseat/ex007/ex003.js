function myFunction(temp) {
    return typeof temp === 'number' ? 'Temperatura inválida' :
        temp.toLowerCase().includes("f") ? (temp.toLowerCase().replace('f', "") - 32) * 5 / 9 + ' C' :
            temp.toLowerCase().includes("c") ? temp.toLowerCase().replace('c', "") * 9 / 5 + 32 + ' F' :
                'Grau não identificado'

    /* return typeof temp === 'number' || temp.toString().toLowerCase().includes("f") === false && temp.toString().toLowerCase().includes("c") === false ? 'Temperatura inválida' : temp.toLowerCase().includes("f") ? (temp.toLowerCase().replace('f', "") - 32) * 5 / 9 + ' C' : temp.toLowerCase().replace('c', "") * 9 / 5 + 32 + ' F' */

    /* return temp.toLowerCase().includes("f") ? (temp.toLowerCase().replace('f', "") - 32) * 5 / 9 + ' C' :
           temp.toLowerCase().includes("c") ? temp.toLowerCase().replace('c', "") * 9 / 5 + 32 + ' F' :
               typeof temp === 'number' ? 'Temperatura inválida' : "Grau não identificado" */

}

console.log(myFunction("30c")) //86
console.log(myFunction("30C")) //86

console.log(myFunction("50f")) //10
console.log(myFunction("86F")) //30

console.log(myFunction("30.1c"))
console.log(myFunction("86.1F"))

console.log(myFunction("12"))
console.log(myFunction(12))

console.log(myFunction(''))
