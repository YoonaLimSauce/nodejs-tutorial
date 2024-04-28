/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-28 22:28:15
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-28 22:35:49
 * @FilePath: \node-js-demo\api_server\router\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const router = express.Router();
const user_handler = require('../router_handler/user');

router.post('/reguser', user_handler.regUser);

router.post('/login', user_handler.login);

module.exports = router;