const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  originalURL: {
    type: 'string',
    require: true
  },
  newURL: {
    type: 'string',
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('URL', urlSchema)
