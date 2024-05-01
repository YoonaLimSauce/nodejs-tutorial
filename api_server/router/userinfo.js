const express = require('express');
const userinfo_handler = require('../router_handler/userinfo');

const router = express.Router();

router.get('/userinfo', userinfo_handler.getUserInfo);

router.post('/userinfo', userinfo_handler.updateUserInfo);

module.exports = router;