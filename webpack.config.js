﻿const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	plugins: [
	    new HtmlWebPackPlugin({
	      template: "./src/index.html",
	      filename: "./index.html"
	    }),
	    new MiniCssExtractPlugin({
	      filename: "[name].css",
	      chunkFilename: "[id].css"
	    })
	],
	module: {
	    rules: [
	      {
	        test: /\.js$/,
	        exclude: /node_modules/,
	        use: ["babel-loader", "eslint-loader"]
	      },
	      {
	        test: /\.html$/,
	        use: [
	          {
	            loader: "html-loader",
	            options: { minimize: true }
	          }
	        ]
	      },
	      {
	      	test: /\.css$/,
	        use: [
	          "style-loader",
	           MiniCssExtractPlugin.loader,
	          "css-loader"
	         ]
		   }
	    ]
	}
};