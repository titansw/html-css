const express = require('express')

const app = express()

app.listen('3000')

//Get **************
//requisiçao, resposta
//app.route('/').get((req, res) => res.send('hello'))
app.route('/sobre').get((req, res) => res.send('hello sobre'))

//Post ***************
//middleware
app.use(express.json())

app.route('/').post((req, res) => console.log(req.body))

app.route('/').post((req, res) => res.send(req.boby))

//Put **************
let author = 'jake'

app.route('/').get((req, res) => res.send(author))

app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)
})

//Delete

app.route('/:identificador').delete((req, res) => {
    author = ''
    res.send(req.params.identificador)

})