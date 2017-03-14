var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.dev.config");
var port = 8080;
var url = `http://localhost:${port}/`;
config.entry.app = [`webpack-dev-server/client?${url}`, "webpack/hot/dev-server", config.entry.app];
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
	stats: {
		colors: true
	},
	noInfo: true,
	hot: true,
	publicPath: config.output.publicPath
});
server.listen(port, "0.0.0.0");
// 打包完毕后启动浏览器
server.middleware.waitUntilValid(function () {
	console.log(`> Listening at ${url}`);
	require('child_process').exec(`start ${url}`);
})