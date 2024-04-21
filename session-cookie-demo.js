/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-21 22:40:58
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-21 22:42:11
 * @FilePath: \node-js-demo\session-cookie-demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const app = express()

const session = require('express-session')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))