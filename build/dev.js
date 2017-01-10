var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.dev.config");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
    publicPath: '/dist/'  // 必须配置
});
server.listen(8080, "0.0.0.0", function () {
    var c = require('child_process');
    c.exec("start http://127.0.0.1:8080/");
});
