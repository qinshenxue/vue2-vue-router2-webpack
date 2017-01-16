var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.dev.config");

config.entry.app=["webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server",config.entry.app]

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
	 stats: { colors: true },
	 hot:true,
    publicPath: '/dist/'  // 必须配置
});
server.listen(8080, "0.0.0.0", function () {
    var c = require('child_process');
    c.exec("start http://127.0.0.1:8080/");
});
