/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-21 09:12:13
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-21 09:17:33
 * @FilePath: \node-js-demo\mysql-demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mysql = require('mysql')

const database = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'mydatabase'
})

database.query('SELECT * FROM mydatatable', (err, results) => {
  if (err) {
    return console.log(err.message)
  } else {
    console.log(results)
  }
})