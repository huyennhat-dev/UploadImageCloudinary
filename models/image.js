const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

let ImageModel = mongoose.model('Image', imageSchema)

module.exports = { ImageModel }