const axios = require('axios')
const { join } = require('path')

module.exports = {

  // Head and global Meta tags
  head: {
    titleTemplate: '%s | Nuxt static 🔥',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'A static site powered by Nuxt.js'
      }
    ]
  },

  // Nuxt environment variables
  env: {
    dataDir: join(__dirname, 'dist/data')
  },

  // Generate dynamic routes
  generate: {
    minify: {
  collapseBooleanAttributes: true,
  collapseWhitespace: false,
  decodeEntities: true,
  minifyCSS: true,
  minifyJS: true,
  processConditionalComments: true,
  removeAttributeQuotes: false,
  removeComments: false,
  removeEmptyAttributes: true,
  removeOptionalTags: false,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: false,
  removeStyleLinkTypeAttributes: false,
  removeTagWhitespace: false,
  sortAttributes: true,
  sortClassName: false,
  trimCustomFragments: true,
  useShortDoctype: true
},
    async routes() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      return data.map(user => `/users/${user.id}`)
    }
  }

}
