const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker'
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter'
            },
            {
                title: 'Teste aki',
                author: 'Augusto Cury'
            }

        ]
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            }
        ]
    },
]

/* console.log(`Temos o total de ${booksByCategory.length} categorias`)

for (i of booksByCategory) {
    console.log(`Na categoria ${i.category} temos ${i.books.length} livros.`)
} */

function myFunction(){
    let count = []
    for (i of booksByCategory) {
        for (f of i.books)
           if(count.indexOf(f.author) == -1){
            count.push(f.author)
           }
    }
     return `Temos ${count.length} autores`
}

function augusto(key){
    let livros = []

    for (categorias of booksByCategory){
        for( livro of categorias.books){
            if(livro.author == key){
                livros.push(livro.title) 
            }
        }
    }
    return livros.join(", ")
}

console.log(augusto("Augusto Cury"))
console.log(augusto("Stephen R. Covey"))
console.log(augusto("George S. Clason"))