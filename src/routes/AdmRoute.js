const router = require('express').Router()
const jwt = require('jsonwebtoken')
const icontrollers = require('../controllers/ItemController')
const ucontrollers = require('../controllers/UserController')
const User = require('../schemas/User')
//require('dotenv').config()


//controle de rotas de requisição por meio da chamada de funções de controle de tabelas do banco de dados
//rotas deste .js são especificamente para contas admin que podem acessálos passando o bearer token e informando os ids corretos

// inserir um novo item no banco de dados
router.post('/item/add', authenticateAndAuthorize, icontrollers.addItem)

router.delete('/delete/:id', authenticateAndAuthorize, ucontrollers.removeUser)

// atualizar um item do banco de dados pelo id
router.patch('/item/:id', authenticateAndAuthorize, icontrollers.updateItem)

// excluir um item do banco de dados pelo id
router.delete('/item/:id', authenticateAndAuthorize, icontrollers.deleteItem)

router.patch('/updt/:id', authenticateAndAuthorize, ucontrollers.updateUser)

async function authenticateAndAuthorize(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Acesso negado!' })
    }

    try {
        const secret = AISUGFBbfUIGVUTfcITCuitcIUvKUGJViutfgVIU
        const decoded = jwt.verify(token, secret)

        const user = await User.findById(decoded.id)

        if (!user) {
            return res.status(401).json({ message: 'Usuário não encontrado!' })
        }

        // Check if the user has admin privileges
        if (user.isAdmin !== 1) {
            return res.status(403).json({ message: 'Acesso não autorizado!' })
        }

        next()
    } catch (error) {
        console.error(error)
        return res.status(401).json({ message: 'Token inválido!' })
    }
}

module.exports = router