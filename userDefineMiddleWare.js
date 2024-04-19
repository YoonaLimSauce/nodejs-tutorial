const express = require('express')
const qs = require('querystring')

const app = express()

app.use((req, res, next) => {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk.toString()
    })

    req.on('end', () => {
        const body = qs.parse(str)
        console.log(body)
    })

    next()
})

app.post('/user', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
