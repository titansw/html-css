// CommonJs => Require
// const http = require('http')

// ESModules => import/export (add no package.json => "type": "module",)
import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'
import { extractQueryParams } from './utils/extract-query-params.js'

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso
// POST => Criar um recurso
// PUT => Atualizar um recurso COMPLETO
// PATCH => Atualizar uma informação ESPECÍFICA
// DELETE => Deletar um recurso

// Formas do front enviar paramentros
// Query Parameters: http://localhost:3333/users?userId=1&name=Titan => URL Stateful: Fultros, paginação, não-obrigatórios
// Route Parameters: http://localhost:3333/users/1 => Itentificação de recurso : Metodo GET, DELETE
// Request Body: Envio de info de um formulário 


const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if (route) {
        const routeParams = req.url.match(route.path)

        const { query, ...params } = routeParams.groups

        req.params = params
        req.query = query ? extractQueryParams(query) : {}

        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3333)