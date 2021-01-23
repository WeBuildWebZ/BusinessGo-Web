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
    config.module.rules.push({
      test: /\.+(jsx?)$/,
      loader: defaultLoaders.babel,
      include: path.resolve(__dirname, './src')
    });

    return config;
  },
  env: { ...env },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/projects')]
  },
  images: {
    domains: ['res.cloudinary.com']
  }
};
