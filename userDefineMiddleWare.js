const express = require(express)

const app = express()

app.use((req, res, next) => {
    let str = ''
    req.on('data', (chunk) => {
        str += chunk.toString()
    })

    next()
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
