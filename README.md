# 短網址生產器 - URL Shortener

![](https://i.imgur.com/wsBZcBe.png)

![](https://i.imgur.com/Po8Z6uW.png)

## Start on Heroku

[URL Shortener](https://github.com/markdown-it/markdown-it-emoji)

## 環境建置(prerequisites)
- Node.js v10.15.0
- Express v4.17.1
- Express-handlebars v5.2.0
- mongodb with mongoose as ODM

## 安裝與執行步驟 (installation and execution)

- 使用 Git Bash

1. 將專案clone到本地環境
   ```
   git clone https://github.com/a7465847/URL_shortener.git
   ```

2. 進入專案資料夾
   ```
   cd URL-shortener
   ```

3. 查看專案內 package.json 檔案需安裝的npm套件
   ```
   npm install 
   ```

4. 安裝 nodemon 套件 (本地未安裝  請執行此步驟)
   ```
   npm install -g nodemon    
   ```

5. 新增種子資料
   ```
   npm run seed
   ```

6. 啟動伺服器，執行 app.js 檔案
   ```
   npm run dev or npm run start
   ```

7. 終端機回應以下內容 代表代表可執行
   ```
   Express is running on http://localhost:3000
   ```

8. 在瀏覽器輸入 http://localhost:3000 開始使用


## 功能描述 (features)
- 將原始網址變為短網址使用
- 採用數字與大小寫英文字母隨機組合定義短網址
- 使用者可點擊copy複製網址


