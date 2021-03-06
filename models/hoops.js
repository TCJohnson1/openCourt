const mongoose = require('mongoose')
const Schema = mongoose.Schema

const hoopSchema = new mongoose.Schema({
      shortname: {type: String},
      team: {type: String},
      city: {type: String},
      conference: {type: String},
      division: {type: String},
})

const Hoop = mongoose.model('Hoop', hoopSchema)

module.exports = Hoop