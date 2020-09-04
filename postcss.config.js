module.exports = {
    plugins: [
      // ...
      require('tailwindcss'),
      require('autoprefixer'),
      require('@fullhuman/postcss-purgecss')({
        content:[
          './src/views/**/*.ejs',
          './src/views/*.ejs'
        ],
        defaultExtractor: content=> content.match(/[a-zA-Z0-9-_:/]+/g) || []
      })
      // ...
    ]
  }