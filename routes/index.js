const express = require('express')
const Random = require('../generateRandom')
const URL = require('../models/url')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res, next) => {
  const originalURL = req.body.originalURL
  // 如果資料庫有 直接給短網址不另外製造
  const urllist = await URL.find({ originalURL: `${originalURL}` }).lean().then(url => url[0])
  const searchOriginalUrl = await URL.exists({ originalURL })
  if (searchOriginalUrl) {
    return res.render('index', {
      message: '該網址已存在請妥善保管,再次給予您短網址',
      urllist
    })
  } else next()
}, async (req, res) => {
  // 資料庫沒有 製作短網址
  const originalURL = req.body.originalURL
  const baseUrl = req.headers.host
  const RandomFive = Random()
  const newURL = `${baseUrl}/${RandomFive}`
  // 存入資料庫 給予使用者新縮短碼
  await URL.create({ originalURL, newURL })
    .then(res.render('index', { originalURL, newURL }))
})

module.exports = router
