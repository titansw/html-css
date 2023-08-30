let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    vizualizacoes: 0,
    comentarios: [
        { autor: 'a', mensagem: 'b' },
        { autor: 'a', mensagem: 'b' }
    ],
    estaAoVivo: true
}

function postagens(titulo, mensagem, autor) {
    this.titulo = titulo
    this.mensagem = mensagem
    this.autor = autor
    this.vizualizacoes = 0
    this.comentarios = []
    this.estaAoVivo = false
}

const teste = new postagens('a', 'b', 'c')
console.log(teste);