module.exports.regUser = (req, res) => {
    const userinfo = req.body

    if (!userinfo.username || !userinfo.password) {
        return res.send({ status: 1, msg: '用户名和密码不能为空' })
    }

    res.send('请求响应函数已分离，reguser OK')
}

module.exports.login = (req, res) => {
    res.send('请求响应函数已分离，login OK')
}