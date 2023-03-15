function myFunction(receitas, despesas) {
    let receita = 0
    let despesa = 0

    for (i of receitas) {
        receita += i
    }
    for (i of despesas) {
        despesa += i
    }

    let total = receita - despesa
    return total > 0 ? `Saldo Positivo R$${total.toFixed(2)}` : `Saldo Negativo R$${total.toFixed(2)}`
}

let receitas = [50.98, 1000.11, 900.50, 200.00] // 2150,50
let despesas = [20, 12, 100, 66, 1000] // 1198

console.log(myFunction(receitas, despesas))