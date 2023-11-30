const User = require('../schemas/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//require('dotenv').config()

//UserController possui todas as funções executáveis sobre usuários

const registerUser = async(req, res) =>{
    const {name, email, password, passwordConfirmation} = req.body
    if(!name || !email || !password || !passwordConfirmation){
        return res.status(400).json({message: 'Todos os campos são necesários!'})
    }

    if(password !== passwordConfirmation){
        return res.status(400).json({message: 'As senhas não são idênticas!'})
    }

    const userExist = await User.findOne({email: email})
    if(userExist){
        return res.status(400).json({message: 'Usuário já existe!'})
    }

    const salt = await bcrypt.genSalt(5)
    const passwordHash = await bcrypt.hash(password, salt)

    const newUser = {name, email, password: passwordHash}
    try {
        await User.create(newUser)
        return res.status(201).json({message: 'Usuário criado com sucesso!'})
    } catch (error) {
        return res.status(400).json({error: error})
    }
}

const updateUser = async (req, res) => {
    const ID = req.params.id
    const {name, email, password, isAdmin} = req.body
    const user = {name, email, password, isAdmin}
    try {
        const updt = await User.updateOne({_id: ID}, user)

        if(updt.matchedCount === 0){
            res.status(422).json({message: 'Item não encontrado!'})
            return
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'Todos os campos são necesários!' })
    }
    try {
        const user = await User.findOne({ email: email })
        if (!user) {
            return res.status(400).json({ message: 'Usuário não encontrado!' })
        }

        const passwordCorrect = await bcrypt.compare(password, user.password)
        if (!passwordCorrect) {
            return res.status(400).json({ message: 'Senha incorreta!' })
        }
        const secret = AISUGFBbfUIGVUTfcITCuitcIUvKUGJViutfgVIU
        const token = await jwt.sign({ id: user._id }, secret)

        return res.status(200).json({ message: 'Logado!', id: user._id, token })
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao gerar token.' })
    }
}


const listAll = async (req, res) => {
    try {
        const users = await User.find({}, '_id name email')
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao listar todos usuários!' })
    }
}

const listId = async (req, res) => {
    const ID = req.params.id
    try {
        const user = await User.findById(ID)
        if (user) {
            const { name, email, _id } = user
            const simplifiedUser = { id: _id, name, email}
            return res.status(200).json(simplifiedUser)
        }
        return res.status(404).json({ message: 'Usuário não encontrado!' })
    } catch (error) {
        return res.status(500).json({ message: 'Erro ao tentar buscar usuário!' })
    }
}

const removeUser = async(req, res) =>{
    const ID = req.params.id
    try {
        const user = await User.findByIdAndDelete(ID)
        if(!user){
            return res.status(400).json({message: 'Usuário não encontrado!'})
        }
        return res.status(200).json({message: 'Usuário deletado com sucesso!'})
    } catch (error) {
        return res.status(500).json({error: error})
    }
}



module.exports = { registerUser, loginUser, listAll, removeUser, listId , updateUser}