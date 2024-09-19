const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js',
	},
	mode: 'development',
	devServer: {
		static: path.resolve(__dirname, '../dist'),
		compress: true,
		port: 8080,
		hot: true,
		open: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,  // Handle both JS and JSX files
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		  	{
				test: /\.css$/,  // Rule for CSS files
				use: ['style-loader', 'css-loader'],
		  	},
		  	{
				test: /\.(png|jpg|gif)$/,  // Rule for image files
				use: [
			  		{
						loader: 'file-loader',
					options: {
						name: '[name].[ext]',  // Keep the original file name and extension
				  		outputPath: 'images',  // Output path for images
					},
			  		},
				],
		  	},
		],
	  },
	  devtool: 'inline-source-map', 
};
