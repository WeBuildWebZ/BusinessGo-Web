module.exports = {
  webpack: function (config) {
    // Consolidate chunk files instead
    config.optimization.splitChunks = {
      cacheGroups: {
        default: false
      }
    };
    // Move runtime into bundle instead of separate file
    config.optimization.runtimeChunk = false;

    // JS
    config.output = {
      libraryTarget: 'umd',
      library: 'WeBuildWebzWidgets',
      filename: './bundle.min.js'
    };

    // CSS. "5" is MiniCssPlugin
    config.plugins[5].options.filename = './botchat.css';

    const ruleIndex = config.module.rules.findIndex(rule => rule.oneOf);

    const resolverIndex = config.module.rules[ruleIndex].oneOf.findIndex(element =>
      element.test.some(extension => extension.toString().indexOf('png'))
    );

    // Override image loader to include references on js bundle
    config.module.rules[ruleIndex].oneOf[resolverIndex] = {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: ['url-loader?limit=1000000', 'img-loader']
    };

    return config;
  }
};
