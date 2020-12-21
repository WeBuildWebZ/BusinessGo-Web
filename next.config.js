const path = require('path');

exports.webpack = (config, { defaultLoaders }) => {
  config.module.rules.push({
    test: /\.+(jsx?)$/,
    loader: defaultLoaders.babel,
    include: path.resolve(__dirname, './src')
  });
  return config;
};

const { env } = process;
delete env.NODE_ENV;
delete env.__NEXT_PROCESSED_ENV;
delete env.NODE_OPTIONS;
env.PROJECT_NAME = env.PROJECT_NAME || process.argv[4];

exports.env = { ...env };
