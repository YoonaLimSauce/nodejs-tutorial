const { userInfo } = require('os')
const db = require('../db/index')
const bcrypt = require('bcryptjs')

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

        res.cc('登录成功', 0)
    })
}