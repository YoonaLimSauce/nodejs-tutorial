/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-29 21:13:46
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-29 21:14:28
 * @FilePath: \node-js-demo\api_server\db\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mysql = require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'my_db_01'
})

module.exports = db