/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-28 22:02:30
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-05-01 07:31:59
 * @FilePath: \node-js-demo\api_server\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const cors = require('cors')
const joi = require('joi')
const userRouter = require('./router/user')
const { expressjwt : expressJWT } = require('express-jwt')
const config = require('./config')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))    // 解析 application/x-www-form-urlencoded 格式的请求体数据
app.use(function(req, res, next) {
    res.cc = function(err, status = 1) {
        res.send({
            status,
            msg: err instanceof Error ? err.message : err
        })
    }
    next()
})

app.use(expressJWT({ secret: config.jwtsecretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api\//] }))

app.use('/api', userRouter)

app.use(function(err, req, res, next) {
    if (err instanceof joi.ValidationError) {
        return res.cc(err)
    }
    if (err.name === 'UnauthorizedError') {
        return res.cc('身份认证失败')
    }
    res.cc(err)
})

app.listen(8000, () => {
    console.log('api server is running at http://localhost:8000')
})