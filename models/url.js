const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  originalURL: {
    type: 'string',
    require: true
  },
  random: {
    type: 'string',
    require: true
  },
  newShortURL: {
    type: 'string'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('URL', urlSchema)
