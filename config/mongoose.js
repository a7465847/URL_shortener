const mongoose = require('mongoose')

const DB_URI = process.env.DB_URI || 'mongodb://localhost/url-shortener'

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb conneted')
})

module.exports = db
