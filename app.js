const express = require('express')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')
const URL = require('./models/url')
const generatePassword = require('./generateRandom')
require('./config/mongoose')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyparser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  console.log(generatePassword())
  res.render('index')

})

app.post('/', async (req, res) => {
  // console.log(req._parsedUrl)
  // 使用者輸入原始網址
  const originalURL = req.body.originalURL
  const baseUrl = 'https://powerful-cliffs-44685.herokuapp.com/'
  try {
    // 先判斷資料庫有沒有原始網址
    const urllist = await URL.find({ originalURL: `${originalURL}` }).lean().then(url => url[0])
    if (!urllist) return res.redirect('/')
    res.render('index', { urllist })

    // 資料庫沒有 製作縮短碼


    // 存入資料庫 給予使用者新縮短碼

  } catch (err) {
    console.log(err)
  }




})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})


