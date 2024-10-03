const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'cartMfe'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cartMfe',
      filename: 'remoteEntry.js',
      exposes: {
        './CartModule': './src/app/cart/cart.module.ts'
      },
      shared: ['@angular/core', '@angular/common', 'rxjs']
    })
  ]
};
