'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL: '"/api"',
  ACTUAL_URL: '"http://192.168.1.57/pmpcms/"'
})
