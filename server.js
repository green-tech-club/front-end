const express = require('express');
const path = require('path');
const app = express();
var morgan = require('morgan');

app.use(morgan('dev')); // Use morgan first
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port);
