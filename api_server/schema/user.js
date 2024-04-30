const joi = require('joi')

const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

module.exports.reg_login_schema = {
  body: {
    username: username,
    password: password
  }
}