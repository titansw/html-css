function exibirTipo(imput) {
    for (var c = 0; c >= 0; c++) {
        if (c % 2 === 0) {
            console.log(`${imput} "PAR"`);
        } else {
            console.log(`${imput} "IMPAR"`);
        }
    }
}

exibirTipo(5)