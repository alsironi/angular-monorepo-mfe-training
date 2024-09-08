const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'checkout',
    publicPath: 'auto'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'checkout',
      filename: 'remoteEntry.js',
      exposes: {
        './CheckoutModule': 'apps/checkout-mfe/src/app/checkout.module.ts',
        './CheckoutRoutes': 'apps/checkout-mfe/src/app/checkout.routes.ts'
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: false },
        '@angular/common': { singleton: true, strictVersion: false },
        rxjs: { singleton: true, strictVersion: false }
      }
    })
  ]
};
