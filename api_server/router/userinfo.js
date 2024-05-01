const express = require('express');
const expressJoi = require('@escook/express-joi');
const { update_userinfo_schema } = require('../schema/user');
const userinfo_handler = require('../router_handler/userinfo');

const router = express.Router();

router.get('/userinfo', userinfo_handler.getUserInfo);

router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo);

module.exports = router;