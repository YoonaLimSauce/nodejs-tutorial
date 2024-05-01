const db = require('../db/index');

const sqlStr_userinfo_existed = `select id, username, nickname, email, user_pic from ev_users where id = ?`;

module.exports.getUserInfo = (req, res) => {
    db.query(sqlStr_userinfo_existed, [req.auth.id], (err, results) => {
        if (err) {
            return res.cc(err);
        }
        if (results.length !== 1) {
            return res.cc('获取用户信息失败');
        }
        res.send({
            status: 0,
            msg: '获取用户信息成功',
            data: results[0]
        });
    });
}