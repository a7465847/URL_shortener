const express = require('express')
const exphbs = require('express-handlebars')
const bodyparser = require('body-parser')
const routes = require('./routes')

require('./config/mongoose')
const app = express()
const PORT = process.env.PORT || 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})

