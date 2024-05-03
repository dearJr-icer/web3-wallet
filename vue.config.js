const { defineConfig } = require('@vue/cli-service')
const NodePolyfillWebPackPlugin = require("node-polyfill-webpack-plugin")
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    devtool : 'source-map',
    plugins:[
      new NodePolyfillWebPackPlugin(),
    ]
  }
})
