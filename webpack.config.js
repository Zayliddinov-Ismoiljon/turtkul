const path = require("path");

module.exports = {
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      utils: path.resolve(__dirname, "./src/utils"),
      pages: path.resolve(__dirname, "./src/pages"),
      routes: path.resolve(__dirname, "./src/routes"),
    },
  },
};


// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.less$/i,
//         use: [
//           // compiles Less to CSS
//           "style-loader",
//           "css-loader",
//           "less-loader",
//         ],
//       },
//     ],
//   },
// };