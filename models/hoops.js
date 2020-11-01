const mongoose = require('mongoose')

const hoopSchema = new mongoose.Schema({
      shortname: {type: String, required: true},
      team: {type: String, required: true},
      city: {type: String, required: true},
      conference: {type: String, required: true},
      division: {type: String, required: true},
})

const Hoop = mongoose.model('Hoop', hoopSchema)

module.exports = Hoop