const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new mongoose.Schema({
      first_name:{type: String},
      last_name: {type: String},
      position: {type: String},
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player