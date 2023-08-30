function exibirPropriedades(imput) {
    for (x in imput) {
        if (typeof imput[x] === 'string') console.log(x, imput[x]);
    }
}

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robin',
    personagem: 'Thor'
}
exibirPropriedades(filme)