/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-21 22:40:58
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-21 23:51:50
 * @FilePath: \node-js-demo\session-cookie-demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

const session = require('express-session')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended: false }))

app.post('/api/login', (req, res) => {
  if (req.body.username !== 'admin' || req.body.password !== '123456') {
    return res.send({ status: 1, msg: '登录失败' })
  }

  req.session.user = req.body
  req.session.isLogin = true

  res.send({ status: 0, msg: '登录成功' })
})

app.get('/api/username', (req, res) => {
  if (!req.session.isLogin) {
    return res.send({ status: 1, msg: '请先登录' })
  }

  res.send({ status: 0, msg: '获取成功', data: req.session.user.username })
})

app.post('/api/logout', (req, res) => {
  req.session.destroy()
  res.send({ status: 0, msg: '退出成功' })
})

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000')
})