const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  productionSourceMap: false, // 在生產環境禁用 source map

  // 開發伺服器配置
  devServer: {
    hot: true, // 啟用熱重載
    liveReload: true, // 啟用即時重載
    historyApiFallback: true, // 處理 history 模式的路由
    host: "0.0.0.0", // 允許外部 IP 訪問
    client: {
      overlay: true, // 顯示錯誤覆蓋層
      logging: "warn", // 減少日誌輸出
    },
  },

  // 生產環境配置
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

  // chainWebpack: (config) => {
  //   if (process.env.NODE_ENV === "production") {
  // 壓縮圖片
  /*
      config.module
        .rule("images")
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          bypassOnDebug: true,
        })
        .end();
      */ //

  // PWA 配置
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
