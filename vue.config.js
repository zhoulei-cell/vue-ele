const cities = require('./src/network/json/cities.json')
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~assets/scss/base.scss";'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://ele-interface.herokuapp.com/api/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    before(app) {
      app.get('/data/cities', (req, res) => {
        res.json(cities)
      })
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        assets: '@/assets',
        views: '@/views',
        utils: '@/utils',
        api: '@/api',
        store: '@/store',
        network: '@/network'
      }
    }
  }
}
