// vue.config.js
module.exports = {
  chainWebpack: (config) => {
      console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
      if (process.env.NODE_ENV == 'analyzer') {
          /**
           * 分析器，可以查看打包之后的效果
           * npm run build:analyzer
           * 运行后会打开一个网址
           * 
           */
          config.plugin("webpack-bundle-analyzer").use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);
      }
  }
}