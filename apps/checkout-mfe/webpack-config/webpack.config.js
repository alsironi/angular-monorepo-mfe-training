const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'checkoutMfe'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'checkoutMfe',
      filename: 'remoteEntry.js',
      exposes: {
        './CheckoutModule': './src/app/checkout/checkout.module.ts'
      },
      shared: ['@angular/core', '@angular/common', 'rxjs']
    })
  ]
};
