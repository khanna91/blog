module.exports = {
	entry : './src/app.js',
	output : {
		path : './',
		filename : './public/javascripts/bundle.js'
	},
	devtool: "source-map",
	module : {
		loaders : [
			{
				test : /\.js$/,
				exclude : /(node-modules|bower_components)/,
				loader : 'babel-loader',
				query : {
					presets : ['es2015', 'react']
				}
			}
		],
		resolve: {
         	extensions: ['', '.js', '.jsx']
        }
	}
}
