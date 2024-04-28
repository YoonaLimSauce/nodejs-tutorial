/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-28 22:02:30
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-28 22:03:13
 * @FilePath: \node-js-demo\api_server\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))    // 解析 application/x-www-form-urlencoded 格式的请求体数据
app.use('/api', userRouter)

app.listen(8000, () => {
    console.log('api server is running at http://localhost:8000')
})