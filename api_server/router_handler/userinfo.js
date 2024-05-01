const db = require('../db/index');
const bcrypt = require('bcryptjs');

const userinfo_property = ['id', 'username', 'nickname', 'email', 'user_pic'];
const sqlStr_userinfo_existed = `select ${userinfo_property.join(', ')} from ev_users where id = ?`;
const sqlStr_userinfo_update = `update ev_users set ? where id = ?`;
const sqlStr_userpassword_existed = `select * from ev_users where id = ?`;
const sqlStr_update_userpassword = `update ev_users set ? where id = ?`;

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

module.exports.updateUserInfo = (req, res) => {
    db.query(sqlStr_userinfo_update, [req.body, req.body.id], (err, results) => {
        if (err) {
            return res.cc(err);
        }
        if (results.affectedRows !== 1) {
            return res.cc('更新用户信息失败');
        }
        res.cc('更新用户信息成功', 0);
    });
}

module.exports.updatePassword = (req, res) => {
    db.query(sqlStr_userpassword_existed, [req.auth.id], (err, results) => {
        if (err) {
            return res.cc(err);
        }
        if (results.length !== 1) {
            return res.cc('获取用户信息失败');
        }

        const compareResult = bcrypt.compareSync(req.body.old_password, results[0].password);
        if (!compareResult) {
            return res.cc('原密码错误');
        }

        const newPwd = { password: bcrypt.hashSync(req.body.new_password, 10) };
        db.query(sqlStr_update_userpassword, [newPwd, req.auth.id], (err, results) => {
            if (err) {
                return res.cc(err);
            }
            if (results.affectedRows !== 1) {
                return res.cc('更新密码失败');
            }
            res.cc('更新密码成功', 0);
        });
    });
}