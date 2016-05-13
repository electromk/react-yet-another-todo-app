'use strict';

const express = require('express');
const logger = require('morgan');

var app = express();

app.use(function (req, res, next) {
    if(req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(logger('dev'));
app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function() {
    console.log('Server up and running on port %d', process.env.PORT);
});