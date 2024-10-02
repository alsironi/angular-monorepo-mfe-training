const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    uniqueName: 'productsMfe'
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'productsMfe',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsModule': './src/app/products/products.module.ts',
        './ProductListComponent': './src/app/products/product-list.component.ts'
      },
      shared: ['@angular/core', '@angular/common', 'rxjs']
    })
  ]
};
