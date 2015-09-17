var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/miraclist');

var listRouter = require('./app/config/routes.js')();
app.use('/api', listRouter);

app.all('*', function (req, res) {
    res.status(500).send('404 Not Found');
});

var server = app.listen(3000, function () {
    console.log('App listening at http://%s:%s', server.address().address, server.address().port);
});