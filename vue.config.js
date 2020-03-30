const cities = require('./src/network/json/cities')
const shopping = require('./src/network/json/shopping')
const filter = require('./src/network/json/filter')
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

      app.get('/data/shopping', (req, res) => {
        res.json(shopping)
      })

      app.get('/data/filter', (req, res) => {
        res.json(filter)
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
