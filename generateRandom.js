
// 定義隨機亂碼
function sample (arry) {
    let index = Math.floor(Math.random() * arry.length)
    return arry[index]
  }

  function generateRandom() {
  // 定義短網址亂碼
  const urlFormat = 5
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  //創建一個陣列來存儲用戶拾取的東西
  let collection = []

  collection = collection.concat([...lowerCaseLetters])
  collection = collection.concat([...upperCaseLetters])
  collection = collection.concat([...numbers])


  //開始產生亂碼
  let random = ''
  for (let i = 0 ; i < urlFormat ; i++) {
    random += sample(collection)
  }


  //返回生成的密碼
  return random

  }

  module.exports = generateRandom

