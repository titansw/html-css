let responsavel = document.getElementById('responsavel')
let convidado = document.getElementById('convidado')
let resultado = document.getElementById('resultado')

let will = ['Iuri', 'RJ']
let entrar = false

function verificar() {
    if (responsavel.value === 'will') {
       // entrar = will.some((elem) => elem === convidado.value)
        if (will.includes(convidado.value)) resultado.innerHTML = 'Você pode Entrar!'
       // if (entrar) resultado.innerHTML = 'Você pode Entrar!'
        else resultado.innerHTML = 'Você não pode Entrar!'
    } else resultado.innerHTML = 'Você não pode Entrar!'
} 