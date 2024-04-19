/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-20 06:54:06
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-20 06:55:03
 * @FilePath: \node-js-demo\MiddleWareDIY\middleware.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const router = express.Router();

router.get('/user', (req, res) => {
    const body = req.body;
    res.send({
        status: 0,
        msg: 'GET请求成功',
        data: body
    });
});

router.post('/user', (req, res) => {
    const body = req.body;
    res.send({
        status: 0,
        msg: 'POST请求成功',
        data: body
    });
});

module.exports = router;
