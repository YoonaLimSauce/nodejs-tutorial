/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-21 09:12:13
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-21 10:10:42
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

database.query('SELECT * FROM mydatatable', (err, result) => {
  if (err) {
    return console.log(err.message)
  } else {
    console.log(result)
  }
})

const user = { username: 'Jack Dawson', password: 'Rose Dawson' }
const sqlStr = 'INSERT INTO mydatatable (username, password) VALUES (?, ?)'
database.query(sqlStr, [user.username, user.password], (err, result) => {
  if (err) {
    return console.log(err.message)
  }
  if (result.affectedRows > 0) {
    console.log('Insert success')
  }
})
database.query('SELECT * FROM mydatatable', (err, result) => {
  if (err) {
    return console.log(err.message)
  } else {
    console.log('插入成功后的数据:', result)
  }
})