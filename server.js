const express = require('express')
const app = express()
const cors = require('cors') 
const { response } = require('express')
const PORT = 8000

app.use(cors)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/feed'), (req, res) => {
    res.json(__dirname + '/public/feed.html')
}

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`)
})
