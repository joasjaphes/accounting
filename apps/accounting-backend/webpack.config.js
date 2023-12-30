const { composePlugins, withNx } = require('@nx/webpack');
// const path = require('path');


// Nx plugins for webpack.
module.exports = composePlugins(
  withNx({
    target: 'node',
  }),
  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    return {
      ...config,
      // entry: './src/main.ts',
      // target: 'node',
      // mode: 'development', // or 'development'
      // output: {
      //   path: path.resolve(__dirname, '/../../dist/apps/accounting-backend'),
      //   filename: 'main.js',
      // },
      // resolve: {
      //   extensions: ['.ts', '.js'],
      // },
      // module: {
      //   rules: [
      //     {
      //       test: /\.ts$/,
      //       use: 'ts-loader',
      //       exclude: /node_modules/,
      //     },
      //   ],
      // },
    };
  }
);
