const Url = require('../url')
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('url mongodb open')
  const testurl = []
  testurl.push(
    Url.create(
      {
        originalURL: 'https://tw.yahoo.com/',
        newURL: 'http://localhost:3000/w6ff1'
      }
    ))
  Promise.all(testurl).then(() => {
    console.log('url seed done!')
    db.close()
  })
})
