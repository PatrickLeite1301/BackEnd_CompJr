const mongoose = require('mongoose')

//modelo de itens feito com mongoose

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    quant: {
        type: Number,
        required: true,
        unique: false
    },
    price: {
        type: Number,
        required: true,
        unique: false
    },
    producer: {
        type: String,
        required: true,
        unique: false
    }
},
{
    timestamps: true,
})

const Item = mongoose.model('Item', itemSchema)
module.exports = Item