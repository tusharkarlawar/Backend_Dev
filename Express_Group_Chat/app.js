const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: false}));

// Serve the send message form
app.get('/', (req, res) => {
    fs.readFile('username.txt', (err, data) => {
        if(err){
            console.log(err)
            data = 'No chat Exists'
        }
        res.send(`
           ${data}<form action="/" method="POST" onSubmit="document.getElementById('username')">
              <input type="text" id="message" name="message">
              <input type="hidden" id="username" name="username" >
              <br />
              <button type="submit">Send</button>
         </form>
       `);
    });
    
  });

  app.post('/', (req, res) => {
    console.log(req.body.username)
    console.log(req.body.message)
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message} ` , {flag: 'a'}, (err) =>
        err ? console.log(err) : res.redirect("/")
    );
  });


// Serve the login form
app.get('/login', (req, res) => {
    fs.readFile('username.txt', (err, data) => {
        
        res.send(`
        <form action="/login" method="POST" onSubmit="localStorage.setItem('username', document.getElementById('username').value)">
	        <input id="username" type="text" name="username" placeholder="username">
	        <button type="submit">add</button>
         </form>
       `);
     });
  
});

// Handle the login form submission and store the username in localStorage
app.post('/login', (req, res) => {
    console.log(req.body.username)
    //console.log(req.body.message)
    fs.writeFile("username.txt", `${req.body.username}`, { flag: 'a' }, (err) => {
        err ? console.log(err) : res.redirect("/")
    });
  });


  //app.listen(3000)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
