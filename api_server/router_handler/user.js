const { userInfo } = require('os')
const db = require('../db/index')
const bcrypt = require('bcryptjs')

const sqlStr_user_existed = `select * from ev_users where username=?`
const sqlStr_user_insert = `insert into ev_users set ?`

module.exports.regUser = (req, res) => {
    const userinfo = req.body

    if (!userinfo.username || !userinfo.password) {
        res.send({ status: 1, msg: '用户名和密码不能为空' })
        return
    }

    db.query(sqlStr_user_existed, userinfo.username, (err, results) => {
        if (err) {
            res.send({ status: 1, msg: err.message })
            return
        }
        if (results.length > 0) {
            res.send({ status: 1, msg: '用户名已存在' })
            return
        }

        userinfo.password = bcrypt.hashSync(userinfo.password, 10)

        db.query(sqlStr_user_insert, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            if (err) {
                res.send({ status: 1, msg: err.message })
                return
            }
            if (results.affectedRows !== 1) {
                res.send({ status: 1, msg: '注册用户失败' })
                return
            }
            res.send({ status: 0, msg: '注册用户成功' })
            return
        })
    })

}

module.exports.login = (req, res) => {
    res.send('请求响应函数已分离，login OK')
}