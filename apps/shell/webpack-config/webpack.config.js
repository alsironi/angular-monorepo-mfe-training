const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

module.exports = {
  output: {
    uniqueName: 'shell',
    publicPath: 'auto'
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        products: 'products@http://localhost:4201/remoteEntry.js',
        cart: 'cart@http://localhost:4202/remoteEntry.js',
        checkout: 'checkout@http://localhost:4203/remoteEntry.js'
      },
      exposes: {
        './SharedModule': 'libs/shared-data/src/index.ts'
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: false },
        '@angular/common': { singleton: true, strictVersion: false },
        '@angular/router': { singleton: true, strictVersion: false },
        rxjs: { singleton: true, strictVersion: false }
      }
    })
  ]
};
