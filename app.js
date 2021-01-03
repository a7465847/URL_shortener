const express = require('express')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')

const app = express()
const port = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(bodyparser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log('host', req.headers.host)
    res.render('index')
})

app.post('/', (req, res) => {
    // console.log(req._parsedUrl)
})

app.listen(port, () => {
    console.log(`Express is running on http://localhost:${port}`)
})


  