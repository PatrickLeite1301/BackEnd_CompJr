const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const AdmRoute = require('./routes/AdmRoute')
const UsrRoute =require('../src/routes/UsrRoute')
//require('dotenv').config()

const app = express()

//configs
app.use(bodyParser.json()) //json como content-type em requisições
app.use(bodyParser.urlencoded({extended: false}))


//define a rota padrao que permite uso das rotas especificadas em AdmRoute
app.use('/adm', AdmRoute)
app.use('/usr', UsrRoute)

//dados para conexão com o banco de dados que vem do .env por segurança
const Login =  'patrickleite' //process.env.DB_LOGIN //user = patrickleite
const Password = 'backcompjunior'//process.env.DB_PASSWORD //senha = backcompjunior
//conecta ao banco de dados e da um retorno da situação atual da conexão
mongoose.connect(`mongodb+srv://${Login}:${Password}@cluster0.6r7evqo.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log('Conectado ao MongoDB!')
    app.listen(3000)
})
.catch((err)=>{
    console.log('erro ao conectar ao mongo' + err)
})
