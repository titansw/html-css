// Retorna erros

function sayMyName( name = '') {
    if (name === ''){
        throw 'Nome é obrigatório'
    }

    console.log(name)
}

try{
    sayMyName('Mike')
} catch(e){
    console.log(e)
}