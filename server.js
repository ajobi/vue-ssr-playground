const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 4000

const baseUrlContent = 'http://localhost:3000'
const baseUrlHeader = 'http://localhost:3001'

app.get('/', async (req, res) => {
  const responseHeader = await fetch(baseUrlHeader)
  const dataHeader = await responseHeader.text()

  const responseContent = await fetch(baseUrlContent)
  const dataContent = await responseContent.text()

  res.send(`
    ${dataHeader}
    <p style="text-align: center; margin: 20px">Paragraph from express</p>
    ${dataContent}
  `)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
