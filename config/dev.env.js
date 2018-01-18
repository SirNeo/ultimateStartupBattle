'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_URL_API: '"http://localhost:5000/vue-con-auth/us-central1/app"'
})
