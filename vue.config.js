module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        assets: '@/assets',
        views: '@/views',
        utils: '@/utils',
        api: '@/api',
        store: '@/store'
      }
    }
  }
}
