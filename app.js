const express = require('express')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')
const URL = require('./models/url')
const Random = require('./generateRandom')
require('./config/mongoose')
const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyparser.urlencoded({ extended: true }))



app.get('/', (req, res) => {
  res.render('index')

})

app.post('/', async (req, res, next) => {
  const originalURL = req.body.originalURL
  // 如果資料庫有 直接給短網址不另外製造
  const urllist = await URL.find({ originalURL: `${originalURL}` }).lean().then(url => url[0])
  const searchOriginalUrl = await URL.exists({ originalURL })
  if (searchOriginalUrl) {
    return res.render('index', {
      message: '該網址已存在請妥善保管,再次給予您短網址',
      urllist
    })
  }
  else next()

}, async (req, res) => {
  // 資料庫沒有 製作短網址
  const originalURL = req.body.originalURL
  const baseUrl = req.headers.host
  const RandomFive = Random()
  const newURL = `${baseUrl}/${RandomFive}`
  // 存入資料庫 給予使用者新縮短碼
  await URL.create({ originalURL, newURL })
    .then(res.render('index', { originalURL, newURL}))

})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
