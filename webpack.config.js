const path                = require('path')
const webpack             = require('webpack')
const merge               = require('webpack-merge')
const pkg                 = require('./package.json')

const CleanWebpackPlugin  = require('clean-webpack-plugin')
const ExtractTextPlugin   = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin   = require('html-webpack-plugin')

const TARGET = process.env.npm_lifecycle_event

const PATHS = {
  app:          path.join(__dirname, 'app'),
  build:        path.join(__dirname, 'build'),
  node_modules: path.join(__dirname, 'node_modules'),
}

const common = {
  entry: {
    app: PATHS.app,
  },
  module: {
    loaders: [{
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        },
      }, {
        test: /\.(png|jpg)$/,
        loader: 'url',
        query: {
          limit: 25000
        }
      }, {
        test: /\.woff$/,
        loader: 'url',
        query: {
          limit: 100000
        }
      }, {
        test: /\.svg$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React:    'react',
      ReactDOM: 'react-dom',
      Promise:  'imports?this=>global!exports?global.Promise!es6-promise',
      fetch:    'imports?this=>global!exports?global.fetch!isomorphic-fetch',
    }),
    new HtmlWebpackPlugin({
      title: 'Arsenic'
    }),
  ],
  output: {
    path: PATHS.build,
    filename: '/[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      PATHS.app,
      PATHS.node_modules,
    ],
  },
}

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
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
    module: {
      loaders: [{
          test: /\.styl$/,
          loaders: ['style', 'css', 'stylus'],
        }, {
          test: /\.css$/,
          loaders: ['style', 'css'],
        },
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": '"development"'
      }),
      new webpack.HotModuleReplacementPlugin(),
    ]
  })
}

if(TARGET === 'build') {
  const CSS_PROCEDURE = 'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]'

  module.exports = merge(common, {
    entry: {
      vendor: Object.keys(pkg.dependencies)
    },
    module: {
      loaders: [{
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('style-loader', CSS_PROCEDURE + '!stylus-loader'),
        }, {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', CSS_PROCEDURE),
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin([PATHS.build]),
      new ExtractTextPlugin('[name].[chunkhash].css'),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": '"production"'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
    ],
    output: {
      path: PATHS.build,
      filename: '/[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
  })
}