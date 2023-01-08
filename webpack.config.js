const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  devtool: 'inline-source-map',
  optimization: {
    minimize: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "John Martin for District 65 Board of Education",
      minify: true,
      favicon: './src/img/favicon.png',
      meta: {
        'description': 'John Martin for District 65 Board of Education. Putting students first. Rebuilding trust. Re-committing to public education.',
        'og:title': { property: 'og:title', content: 'John Martin for District 65 Board of Education'},
        'og:url': { property: 'og:url', content: 'https://www.JohnMartin65.com'},
        'og:type': { property: 'og:type', content: 'website'}
      },
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
