/*
 * @Author: Yoona Lim miraclefishleong@gmail.com
 * @Date: 2024-04-12 19:20:49
 * @LastEditors: Yoona Lim miraclefishleong@gmail.com
 * @LastEditTime: 2024-04-12 22:19:19
 * @FilePath: \Git\node-js-demo\fs-library-demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
'use strict'

const fs = require('fs')
const path = require('path')

printsegment()

console.log('path模块示例：')
console.log('Current directory:\t\t', __dirname)
const testPath = path.join(__dirname, 'fs-library-test.txt')
console.log('Current file path:\t\t', testPath)
console.log('File name:\t\t\t', path.basename(testPath))
console.log('File extension:\t\t\t', path.basename(testPath, '.txt'))
console.log('Directory name:\t\t\t', path.basename(testPath, path.extname(testPath)))

printsegment()

console.log('fs模块示例：')

// Read file content
fs.readFile('fs-library-test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

// Write file content
fs.writeFile(__dirname +'fs-library-test.txt', 'Hello Node.js!', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('File written successfully!')
})

function printsegment() {
  console.log('************************************************************************************************************************')
}