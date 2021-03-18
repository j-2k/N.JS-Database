
const mongoose = require('mongoose')

const fluffyKittenSchema = mongoose.Schema({
    username: String,
    password: Number,
    //owner: String
})

module.exports = {
    fluffyKittenSchema
}