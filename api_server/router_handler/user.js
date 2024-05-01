/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-28 22:33:39
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-05-01 16:07:52
 * @FilePath: \node-js-demo\api_server\router_handler\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

const sqlStr_user_existed = `select * from ev_users where username=?`
const sqlStr_user_insert = `insert into ev_users set ?`

module.exports.regUser = (req, res) => {
    const userinfo = req.body

    db.query(sqlStr_user_existed, userinfo.username, (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (results.length > 0) {
            return res.cc('用户名已存在')
        }

        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        db.query(sqlStr_user_insert, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            if (err) {
                return res.cc(err)
            }
            if (results.affectedRows !== 1) {
                return res.cc('注册用户失败')
            }
            res.cc('注册用户成功', 0)
        })
    })

}

module.exports.login = (req, res) => {
    const userinfo = req.body

    db.query(sqlStr_user_existed, [userinfo.username], (err, results) => {
        if (err) {
            return res.cc(err)
        }
        if (results.length !== 1) {
            return res.cc('登录失败，用户不存在')
        }

        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareResult) {
            return res.cc('登录失败，密码错误')
        }

        const user = { ...results[0], password: '', user_pic: '' }
        const tokenStr = jwt.sign(user, config.jwtsecretKey, { expiresIn: config.expiresIn })
        res.send({ status: 0, message: '登录成功', token: 'Bearer ' + tokenStr })
    })
}