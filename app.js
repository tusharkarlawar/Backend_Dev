const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   const url = req.url;
   const method = req.method;

   if(url === '/') {
    // Read messages from the file and display them at the top of the form 
    const messages = fs.readFileSync('message.txt', 'utf8').split('\n')
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    messages.forEach(message => { 
        if (message !== '') { 
            res.write(`<p>${message}</p>`); 
        } 
    }); 
    res.write('</body></html>');
    return res.end();
   }

   if(url === '/message' && method === 'POST') {
    const body =[];
    req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        // Append the new message to the file 
        fs.appendFileSync('message.txt', message + '\n'); 
        //fs.writeFileSync('message.txt' , message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        
    });
   }
   res.setHeader('Content-type','text/html');
   res.write('<html>');
   res.write('<head><title>My First Page</title><head>');
   res.write('<body><h1>Hello from Node.js Server!</h1></body>');
   res.write('</html>');
   res.end();
});
server.listen(2000);