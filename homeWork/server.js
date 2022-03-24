const express = require('express');
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000


app.use(express.static(path.join(__dirname, 'public','views')))

app.get('/', function(req, res) {
    console.log(req.url);
    res.sendFile(path.join(__dirname, 'public', 'views', '/index.html'));
  });

app.listen(PORT)
console.log('Server is ready at http://localhost:' + PORT);