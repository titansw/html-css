function exibirTipo(imput) {
    for (var c = 0; c >= 0; c++) {
        if (c % 2 === 0) {
            console.log(`${c} "PAR"`);
        } else {
            console.log(`${c} "IMPAR"`);
        }
    }
}

exibirTipo(5)