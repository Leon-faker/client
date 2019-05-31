module.exports = {
  modules: [
    '@nuxtjs/axios',
  ],

  // router: {
  //   base: '/index/'
  // },

  css:['~assets/css/globlestyle.css'],
  
  /*
  ** Headers of the page
  */
  head: {
    title: 'ssr-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'},
      { hid: 'description', name: 'description', content: 'first ssr app' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  plugins: [
    {src: '~plugins/iview', ssr: true},
    {src: '~plugins/axios', ssr: true},
    {src: '~plugins/vue-mavon-editor', ssr: false}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {

        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

