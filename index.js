import * as Path from 'path'
import * as Url from 'url'
import * as Fs from 'fs'
import * as Http from 'http'

let filepath;

Http.createServer((request, response) => {
    console.log(request.url)
    switch (request.url) {
        case '/':
            filepath = './index.html'
            break;
        case '/about':
            filepath = './about.html'
            break;
        case '/contact-me':
            filepath = './contact-me.html'
            break;
        default:
            filepath = './404.html'
            break;
    }
    Fs.readFile(filepath, (error, data) => {
        if (error) {
            throw error;
        }
        response.setHeader('Content-Type', 'text/html');

        response.end(data);

    })
}).listen(8080)
