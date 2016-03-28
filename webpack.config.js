const path    = require('path')
const webpack = require('webpack')

const PATHS = {
  app:          path.join(__dirname, 'app'),
  build:        path.join(__dirname, 'build'),
  node_modules: path.join(__dirname, 'node_modules'),
}

module.exports = {
  entry: {
    app: PATHS.app,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      PATHS.app,
      PATHS.node_modules,
    ],
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devServer: {
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    devtool: 'eval-source-map',
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify("development") }
    }),
    new webpack.ProvidePlugin({
      React:    'react',
      ReactDOM: 'react-dom',
      Promise:  'imports?this=>global!exports?global.Promise!es6-promise',
      fetch:    'imports?this=>global!exports?global.fetch!isomorphic-fetch',
    })
  ]
}