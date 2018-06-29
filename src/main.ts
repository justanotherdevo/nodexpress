import * as path from 'path';
import * as express from 'express';
import * as http from 'http';

const server = http.createServer((request, response)=> {
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end('Hello Jason\'s World!\n');
});

const port = 8000;

server.listen(port);
console.log('Listening on http://localhost:' + port);
