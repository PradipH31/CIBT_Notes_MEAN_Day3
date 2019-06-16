"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var http_1 = require("http");
var server = http_1.createServer(function (req, resp) {
    fs_1.readFile('index.html', function (err, data) {
        resp.write(data.toString());
        resp.end();
    });
});
server.listen(9000, function () {
    console.log("server running");
});
