/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-20 06:54:10
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-20 16:06:01
 * @FilePath: \node-js-demo\MiddleWareDIY\demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const app = express();

app.get('/api/jsonp', (req, res) => {
    const { callback } = req.query;
    const data = { name: 'Yoona', age: 25 };
    const jsonData = JSON.stringify(data);
    const result = `${callback}(${jsonData})`;
    res.send(result);
});

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }));
const router = require('./middleware');

app.use('/api',router);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
