const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  productionSourceMap: false, // 在生產環境禁用 source map

  chainWebpack: (config) => {
    // 生產環境優化
    if (process.env.NODE_ENV === "production") {
      // 壓縮圖片
      config.module
        .rule("images")
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          bypassOnDebug: true,
        })
        .end();

      // 分割代碼
      config.optimization.splitChunks({
        chunks: "all",
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `npm.${packageName.replace("@", "")}`;
            },
          },
        },
      });
    }
  },

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // GZIP 壓縮
      config.plugins.push(
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css$|\.svg$/,
          threshold: 10240,
          deleteOriginalAssets: false,
        })
      );
    }
  },
  pwa: {
    name: process.env.VUE_APP_TITLE,
    themeColor: "#4a6cf7",
    msTileColor: "#4a6cf7",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    workboxOptions: {
      skipWaiting: true,
    },
  },
};
