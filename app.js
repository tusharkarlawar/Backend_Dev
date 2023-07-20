const http = require('http');

const server = http.createServer((req, res) => {
     //const url = req.url;
    if (req.url === "/") {
        res.end("Welcome home");
    }else if ( req.url === "/about") {
        res.end("Welcome to About Us page");
    }else if (req.url === "/node") {
        res.end("Welcome to my Node js project");
    } else {
        res.end("Invalid URL");
    }
});
server.listen(7000);