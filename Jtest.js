const express = require('express')
const app = express()
const port = 4000
app.get('/',(req, res) => {
    res.send('Welcome to my server!')
})
app.listen(port, () => {
    console.log('Welcome to my server!')
})