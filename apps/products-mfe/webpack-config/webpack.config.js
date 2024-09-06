const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'products',
    publicPath: 'auto'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsModule': 'apps/products-mfe/src/app/products.module.ts',
        './ProductsRoutes': 'apps/products-mfe/src/app/products.routes.ts'
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: false },
        '@angular/common': { singleton: true, strictVersion: false },
        rxjs: { singleton: true, strictVersion: false }
      }
    })
  ]
};
