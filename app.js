const http = require('http');

const server = http.createServer((req, res) => {

    //log your name to the console
    const myName = "Tush"; //Relpace your name 
    console.log('my name is :', myName);

    //send your name in the response to the browser
    res.end(myName);

});
server.listen(4000);