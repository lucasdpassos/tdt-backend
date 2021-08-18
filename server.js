require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const pool = require('./src/db')
const routes = require('./src/routes')


const server = express()

server.use(express.json())
server.use(cors())
server.use(bodyParser.urlencoded({extended: false}))


server.use('/api', routes)


server.listen(process.env.PORT, ()=> {
    console.log(`Servidor Tem de Tudo rodando na porta ${process.env.PORT}`)
})