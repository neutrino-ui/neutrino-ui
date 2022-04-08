const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-controls',
    "@storybook/addon-interactions",
    'storybook-dark-mode'
  ],
  framework: "@storybook/react",
  staticDirs: [{ from: '../src/assets', to: '/assets' }],
  core: {
    builder: 'webpack5',
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  features: {
    storyStoreV7: true,
  },
  webpackFinal: async (config) => {
   config.resolve.plugins = [
        new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, '../tsconfig.json')
        }),
    ];

    // Return the altered config
    return config;
},
}