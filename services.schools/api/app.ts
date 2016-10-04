/// <reference path="../typings/index.d.ts" />
'use strict';

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/ssv');
// var School = require('./models/School');
var express = require('express');
import {SchoolRoutes} from './routes/SchoolRoutes';
var app = express();
var port = process.env.PORT || 3030;


var apiRouter = express.Router();

app.use('/api', SchoolRoutes.init(apiRouter));

app.get('/', function(req, res) {
    res.send('welcome to my API 2!');
});

app.listen(port, function() {
    console.log('Running on port: ' + port);
});