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
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true, // disables Hot Reload
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'client'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
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
    historyApiFallback: true,
    port: 5000,
  },
  mode: 'development',
  devtool: 'inline-source-map',
}
