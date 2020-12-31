const withCSS = require('@zeit/next-css');

const path = require('path');

exports.webpack = (config, { defaultLoaders }) => {
  config.module.rules.push({
    test: /\.+(jsx?)$/,
    loader: defaultLoaders.babel,
    include: path.resolve(__dirname, './src')
  });
  return config;
};

const deleteKeys = env =>
  Object.entries(env).forEach(([key]) => {
    if (key.startsWith('__') || key.startsWith('NODE_')) delete env[key];
  });

const { env } = process;

deleteKeys(env);

env.PROJECT_NAME = env.PROJECT_NAME || process.argv[4];

exports.env = { ...env };

module.exports = withCSS(exports);
