const dotenv = require('dotenv');

const path = require('path');

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  exports.env = dotenv.config().parsed;
  delete exports.env.NODE_ENV;
}

exports.webpack = (config, { defaultLoaders }) => {
  config.module.rules.push({
    test: /\.+(js)$/,
    loader: defaultLoaders.babel,
    include: path.resolve(__dirname, './src')
  });
  return config;
};
