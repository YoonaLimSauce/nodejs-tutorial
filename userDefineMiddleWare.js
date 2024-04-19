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

app.get('/user', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST请求成功',
        data: body
    })
})

app.post('/user', (req, res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: 'POST请求成功',
        data: body
    })
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
