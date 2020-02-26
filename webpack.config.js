const HTMLWebPackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry:
    '/Users/MKleinman/Desktop/MontanaKleinmanWebPortfolio/Personal Website/Web_Home/src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|otf|svg|webp)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  output: {
    filename: 'transformed.js',
    path:
      '/Users/MKleinman/Desktop/MontanaKleinmanWebPortfolio/Personal Website/Web_Home/build'
  },
  plugins: [
    new HTMLWebPackPlugin({
      template:
        '/Users/MKleinman/Desktop/MontanaKleinmanWebPortfolio/Personal Website/Web_Home/public/index.html',
      filename: 'index.html',
      path:
        '/Users/MKleinman/Desktop/MontanaKleinmanWebPortfolio/Personal Website/Web_Home/build'
    })
  ]
};
