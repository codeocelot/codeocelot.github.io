module.exports = {
	entry:'./entry.js',
	output:{
		path:__dirname + '/build/',
		filename:'bundle.js',
	},
	module:{
		loaders:[
			{test: /\.css$/,loader:"style!css",exclude:/(materialize.scss)/},
			{test: /\.scss$/,loaders:["style","css","sass"]},
			{test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				loader : 'file-loader'}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: ["./src", "node_modules", "bower_components"]
	}
}
