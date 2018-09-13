var path = require('path')

module.exports = {
  entry: './index.js',
  mode: 'production',
  output: {
    library: 'FileIcons',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: path.join('css', 'bundle.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader' // translates CSS into CommonJS
          }
        ]
      },
      {
        // Match woff2 in addition to patterns like .woff?v=1.1.1.
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            // Limit at 20k. Above that it emits separate files
            limit: 20000,

            // url-loader sets mimetype if it's passed.
            // Without this it derives it from the file extension
            mimetype: 'application/font-woff',

            // Output below fonts directory
            name: 'fonts/[name].[ext]'
          }
        }
      }
    ]
  }
}
