const express = require('express')
// upar wale syntax ko aise bhi likh sakte hai 
// import express from 'express'
// importing dot env 
require('dotenv').config()
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('sahilsinghdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login</h1>')
})


app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur code</h2>')
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})