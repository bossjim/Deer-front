'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 微服务调用
  BASE_API: '"http://localhost:8201/mall-admin"'
})
