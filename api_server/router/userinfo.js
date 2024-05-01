const express = require('express');
const userinfo_handler = require('../router_handler/userinfo');

const router = express.Router();

router.get('/userinfo', userinfo_handler.getUserInfo);

module.exports = router;