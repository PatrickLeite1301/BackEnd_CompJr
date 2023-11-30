const Item = require('../schemas/Item')
//ItemController possui todas as funções executáveis sobre itens

// addItem verifica as informações, cria o novo item para o banco e atualiza o array de itens que o produtor possui
const addItem = async (req, res) => {
    const {name, quant, price, producer} = req.body
    if (!name || !quant || !price || !producer) {
        return res.status(400).json({ message: 'Invalid input. Utilize todos os campos!' })
    }
    try {
        const existingItem = await Item.findOne({ name, producer })

        if (existingItem) {
            return res.status(400).json({ message: 'Item existente no banco de dados!' })
        }
        const newItem = await Item.create({ name, quant, price, producer })
        res.status(201).json({message: 'Item inserido!', item: newItem}) 
    } catch (error) {
        res.status(500).json({error: error})
    }
}

//lista todos os itens do banco de dados
const readItems = async (req, res) => {
    try {
        const items = await Item.find()
        res.status(200).json(items)
    } catch (error) {
        res.status(500).json({error: error})
    }
}

//lista o item escolhido pelo id passado
const readOne = async (req, res) =>{
    const ID = req.params.id
    try {
        const item = await Item.findOne({_id: ID})
        if(!item){
            res.status(422).json({message: 'Item não encontrado!'})
            return
        }
        res.status(200).json(item)
    }catch (error) {
        res.status(500).json({message: "Algum campo é invalido!"})
    }
    
}

//realiza o update do parametro recebido utilizando patch para não precisa obrigatoriamente de todos os parametros do item cujo id foi passado
const updateItem = async (req, res) => {
    const ID = req.params.id
    const {name, createdAt, quant, price, producer} = req.body
    const item = {name, createdAt, quant, price, producer}
    try {
        const updt = await Item.updateOne({_id: ID}, item)

        if(updt.matchedCount === 0){
            res.status(422).json({message: 'Item não encontrado!'})
            return
        }

        res.status(200).json(item)
    } catch (error) {
        res.status(500).json({error: error})
    }
}
//deleta o item referente ao id recebido
const deleteItem = async (req, res) => {
    const ID = req.params.id
    const item = await Item.findOne({_id: ID})
    if(!item){
        res.status(422).json({message: 'Item não encontrado!'})
        return
    }
    try {
        await Item.deleteOne({_id: ID})
        res.status(200).json({message: 'Item deletado!'})
    }catch (error) {
        res.status(500).json({error: error})
    }
}

module.exports = { addItem, readItems, readOne, updateItem, deleteItem }