const router = require('express').Router()
const jwt = require('jsonwebtoken')
const ucontrollers = require('../controllers/UserController')
const icontrollers = require('../controllers/ItemController')
//require('dotenv').config()

//controle de rotas de requisição por meio da chamada de funções de controle de tabelas do banco de dados
//rotas deste .js podem ser acessados por qualquer conta logada passando o bearer token e informando os ids corretos

router.post('/register', ucontrollers.registerUser)

router.post('/login', ucontrollers.loginUser)

router.get('/all', checkToken, ucontrollers.listAll)

router.get('/find/:id', checkToken, ucontrollers.listId)

// listar todos os itens do banco de dados
router.get('/item/all', checkToken, icontrollers.readItems)

// listar um item do banco de dados pelo id
router.get('/item/:id', checkToken, icontrollers.readOne)

function checkToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(!token){
        return res.status(401).json({message: 'Acesso negado!'})
    }
    try {
        const secret = AISUGFBbfUIGVUTfcITCuitcIUvKUGJViutfgVIU
        jwt.verify(token, secret)
        next()
    } catch (error) {
        console.error(error)
        return res.status(401).json({message: 'Token inválido!'})
    }
}

module.exports = router