const express = require('express');
const helmet = require('helmet');
const api = require('./server.js');

const app = express();

app.use(helmet());

app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🦴Using Programmer Info Security App Started on Port ${port}`);
});

module.exports = app;
