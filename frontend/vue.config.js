/*
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
*/

const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:1337', //  URL API
        changeOrigin: true, // change origin to avoid CORS errors
        pathRewrite: {
          '^/api': '' // Rewrites /api in requests so that the server will parse them correctly
        }
      }
    }
  }
})

