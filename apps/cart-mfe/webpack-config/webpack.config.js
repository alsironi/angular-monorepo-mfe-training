const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'cart',
    publicPath: 'auto'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartModule': 'apps/cart-mfe/src/app/cart.module.ts',
        './CartRoutes': 'apps/cart-mfe/src/app/cart.routes.ts'
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: false },
        '@angular/common': { singleton: true, strictVersion: false },
        rxjs: { singleton: true, strictVersion: false }
      }
    })
  ]
};
