const mongoose = require('mongoose')

const hoopSchema = new mongoose.Schema({
      name: {type: String, required: true},
      team: {type: String, required: true},
      position: {type: String, required: true},
      isFavoritePlayer: Boolean,
})

const Hoop = mongoose.model('Hoop', hoopSchema)

module.exports = Hoop