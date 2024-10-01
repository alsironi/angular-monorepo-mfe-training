const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'shell'
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      filename: 'remoteEntry.js',
      remotes: {
        'products-mfe': 'products@http://localhost:4202/remoteEntry.js',
        'cart-mfe': 'cart@http://localhost:4203/remoteEntry.js',
        'checkout-mfe': 'checkout@http://localhost:4204/remoteEntry.js'
      },
      exposes: {
        './SharedModule': './src/app/shared.module.ts'
      },
      shared: ['@angular/core', '@angular/common', 'rxjs']
    })
  ]
};
