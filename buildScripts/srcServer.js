var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express();

app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        open('http://localhost:' + port);
    }
})
