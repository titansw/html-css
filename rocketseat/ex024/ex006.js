const endereco = {
    Rua: 'Rua tal',
    Cidade: 'Cidade tal',
    CEP: 72000000,
    exibirEndereco(endereco){
        for (chave in endereco) {
            console.log(`${chave}: ${endereco[chave]}`);  
        }
    }
}

endereco.exibirEndereco(endereco)