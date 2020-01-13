const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const fs = require('fs');
var config={
	entry:{
		index:'./src/PMatrix.js'
	},
	mode:'production',
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				use:[
					{loader:'babel-loader'}
				]
			},
		]
	},
	plugins:[
		new UglifyJsPlugin({
			exclude: /\/node_modules/,
			uglifyOptions: {
			  compress: {drop_console:true},
			}
		})
	],
	output:{
		filename:'p-digital-matrix.js',
		path:path.join(__dirname,'lib'),
		publicPath:'../'
	},
}
module.exports = config;
