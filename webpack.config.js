const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './client/main.ts',
  output: {
    path: path.resolve(__dirname, 'server', 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, './server/public'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
}
