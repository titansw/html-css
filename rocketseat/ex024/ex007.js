function Endereco(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
}

const endereco1 = new Endereco('a', 'b', 'c')
const endereco2 = new Endereco('a', 'b', 'c')

function saoIguais(endereco1, endereco2) {
    for (x in endereco1) {
        if (endereco1[x] != endereco2[x]) {
            return false
        }
    }
    return true
}

function temEnderecoMemoriaIguais(endereco1, endereco2) {
    return endereco1 === endereco2
}

console.log(temEnderecoMemoriaIguais(endereco1, endereco2));