import { readFile } from 'fs';

readFile('index.html', (err, data) => {
    console.log(data.toString());
});