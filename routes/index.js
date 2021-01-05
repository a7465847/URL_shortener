const express = require('express')
const Random = require('../generateRandom')
const URL = require('../models/url')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res, next) => {
  const originalURL = req.body.originalURL
  // 先過濾誤按
  if (originalURL === '') return res.redirect('/')
  // 如果資料庫有 直接給短網址不另外製造
  const searchOriginalUrl = await URL.exists({ originalURL })
  if (searchOriginalUrl) {
    const urllist = await URL.find({ originalURL: `${originalURL}` }).lean().then(url => url[0])
    return res.render('index', {
      messageOne: '該網址已存在 請妥善保管,再次給予您短網址',
      urllist
    })
  } else next()
}, async (req, res) => {
  // 資料庫沒有 製作短網址後五碼
  const originalURL = req.body.originalURL
  let RandomFive = Random()

  // 過濾與資料庫重疊後五碼
  const randomDB = await URL.findOne({ random: RandomFive })
  if (randomDB) RandomFive = Random()

  // 存入資料庫 給予使用者新縮短碼
  await URL.create({
    random: RandomFive,
    originalURL: originalURL,
    newShortURL: `${req.headers.host}/${RandomFive}`
  })
    .then(res.render('index', {
      originalURL,
      newShortURL: `${req.headers.host}/${RandomFive}`,
      messageTwo: '短網址已為您準備好了,出發吧'
    }))
})

// 導向原始網頁
router.get('/:id', async (req, res) => {
  const url = await URL.find({ random: req.params.id }).lean().then(url => url[0].originalURL)
  res.redirect(url)
})

module.exports = router
