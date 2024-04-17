/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-17 19:53:42
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-17 20:52:51
 * @FilePath: \node-js-demo\module_router\server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const router = require('./router');
const app = express();
// app.use(router);
app.use('/api', router);

const middle_ware_1 = (req, res, next) => {
    console.log('This is global middleware 1');
    next();
}

const middle_ware_2 = (req, res, next) => {
    console.log('This is partial middleware 2');
    next();
}

app.use(middle_ware_1);
app.get('/', middle_ware_2, (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});