const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemsSchema = new Schema({
    name: {
        type: String,
        required: true,
    }
})

const Items = mongoose.model('hs-items', itemsSchema)
module.exports = Items