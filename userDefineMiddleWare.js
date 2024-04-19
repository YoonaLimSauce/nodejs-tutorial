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
        req.body = body
        next()
    })
})

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
