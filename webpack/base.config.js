const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const path = require('path');

let babelOptions = {
  presets: [
    'es2015',
  ],
  plugins: ["transform-decorators", "transform-runtime"]
};

module.exports = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    'server': path.resolve(__dirname, '..', 'src/app.ts'),
  },
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].bundle.js',
    libraryTarget: 'commonjs2'
  },

  node: {
    __dirname: true,
    __filename: true
  },

  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: babelOptions
        },
        {
          loader: 'ts-loader'
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  plugins: [
    // Adds a banner to the top of each generated chunk
    // https://webpack.github.io/docs/list-of-plugins.html#bannerplugin
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false
    }),
  ]
};
