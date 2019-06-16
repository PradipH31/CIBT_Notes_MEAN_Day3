"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
fs_1.readFile('index.html', function (err, data) {
    console.log(data.toString());
});
