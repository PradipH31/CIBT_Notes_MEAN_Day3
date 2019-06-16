import { readFile } from 'fs';
import { createServer } from 'http';

var server = createServer((req, resp) => {
    readFile('index.html', (err, data) => {
        resp.write(data.toString());
        resp.end();
    });
});

server.listen(9000, () => {
    console.log("server running");
});