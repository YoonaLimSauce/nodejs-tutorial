const db = require('../db/index')

const sqlStr_user_existed = `select * from ev_users where username=?`

module.exports.regUser = (req, res) => {
    const userinfo = req.body

    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, msg: '用户名和密码不能为空' })
    }

    db.query(sqlStr_user_existed, userinfo.username, (err, results) => {
        if (err) {
            return res.send({ status: 1, msg: err.message })
        }
        if (results.length > 0) {
            return res.send({ status: 1, msg: '用户名已存在' })
        }
    })
}

module.exports.login = (req, res) => {
    res.send('请求响应函数已分离，login OK')
}