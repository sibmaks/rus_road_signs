const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
   mode: "production",
   entry: {
      rrs: path.resolve(__dirname, "..", "src", "russian-road-signs.ts")
   },
   output: {
      path: path.join(__dirname, "../dist"),
      filename: "js/[name].js",
   },
   resolve: {
      extensions: [".ts", ".js"],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/,
         },
      ],
   },
   plugins: [
      new CopyPlugin({
         patterns: [{from: ".", to: ".", context: "static"}]
      })
   ],
};
