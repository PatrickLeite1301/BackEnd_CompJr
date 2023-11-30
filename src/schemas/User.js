const mongoose = require('mongoose')

//modelo de usuarios feito com mongoose

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },isAdmin:{
        type: Number,
        default: 0,
        required: false
    },

},
{
    timestamps: true,
})

const User = mongoose.model('User', userSchema)
module.exports = User