function exibirNumerosPrimos(imput) {
    for (num = 2; imput >= num; num++) {
        let ehPrimo = true

        for (divisor = 2; num > divisor; divisor++) {
            if (num % divisor === 0) {
                ehPrimo = false
                break
            }
        }

        if (ehPrimo) console.log(num);
    }
}

exibirNumerosPrimos(15)

