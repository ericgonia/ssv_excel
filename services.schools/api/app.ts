/// <reference path="../typings/index.d.ts" />
'use strict';

import * as express from 'express';
import {DbConfig} from './config/db.conf';
import {SchoolRoutes} from './routes/SchoolRoutes';

DbConfig.init();
var app = express();
var port = process.env.PORT || 3030;


var apiRouter = express.Router();
SchoolRoutes.init(apiRouter);

app.use('/api', apiRouter);

app.get('/', function(req, res) {
    res.send('welcome to my API 2!');
});

app.listen(port, function() {
    console.log('Running on port: ' + port);
});