module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false
      }
    },
    runtimeChunk: false
  },
  output: {
    libraryTarget: 'umd',
    library: 'WeBuildWebzWidgets',
    filename: './widgets.js'
  }
};
