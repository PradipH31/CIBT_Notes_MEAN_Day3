import { readFile } from 'fs';
import { createServer } from 'http';

import express = require('express');
var app = express();
app.get('/', function (req, resp) {
    resp.send('aaa');
})