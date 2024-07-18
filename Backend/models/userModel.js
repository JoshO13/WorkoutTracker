const mongoose = require('mongoose')

const Schema = mongoose.Schema

//defining structure for users in db
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    pasword: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)