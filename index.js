// import * as Path from 'path'
// import * as Url from 'url'
// import * as Fs from 'fs'
// import * as Http from 'http'

const express = require('express');

const app = express();

const port = 3000;

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
})
app.get('/contact-me', (req, res) => {
    res.sendFile(__dirname + '/contact-me.html');
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// let filepath;
// app.get(path, (req, res) => {
//     switch (path) {
//         case '/':
//             filepath = './index.html'
//             break;
//         case '/about':
//             filepath = './about.html'
//             break;
//         case '/contact-me':
//             filepath = './contact-me.html'
//             break;
//         default:
//             filepath = './404.html'
//             break;


//     }
//     res.sendFile(filepath)
// })

// Http.createServer((request, response) => {
//     console.log(request.url)
//     switch (request.url) {
//         case '/':
//             filepath = './index.html'
//             break;
//         case '/about':
//             filepath = './about.html'
//             break;
//         case '/contact-me':
//             filepath = './contact-me.html'
//             break;
//         default:
//             filepath = './404.html'
//             break;
//     }
//     Fs.readFile(filepath, (error, data) => {
//         if (error) {
//             throw error;
//         }
//         response.setHeader('Content-Type', 'text/html');

//         response.end(data);

//     })
// }).listen(8080)
