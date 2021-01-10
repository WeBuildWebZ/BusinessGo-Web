const path = require('path');

const deleteKeys = env =>
  Object.entries(env).forEach(([key]) => {
    if (key.startsWith('__') || key.startsWith('NODE_')) delete env[key];
  });

const { env } = process;

deleteKeys(env);

env.PROJECT_NAME = env.PROJECT_NAME || process.argv[4];

module.exports = {
  webpack: (config, { defaultLoaders, isServer }) => {
    // config.module.rules.push({
    //   test: /\.+(jsx?)$/,
    //   loader: defaultLoaders.babel,
    //   include: path.resolve(__dirname, './src')
    // });

    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash:8].[ext]',
            publicPath: url => `/_next/static/css/${url}`,
            outputPath: `${isServer ? '../' : ''}static/css/`,
            esModule: false
          }
        }
      ]
    });

    return config;
  },
  env: { ...env },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/projects')]
  }
};
