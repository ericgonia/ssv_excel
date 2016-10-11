/// <reference path="../typings/index.d.ts" />
'use strict';
var express = require('express');
var db_conf_1 = require('./config/db.conf');
var SchoolRoutes_1 = require('./routes/SchoolRoutes');
db_conf_1.DbConfig.init();
var app = express();
var port = process.env.PORT || 3030;
var apiRouter = express.Router();
SchoolRoutes_1.SchoolRoutes.init(apiRouter);
app.use('/api', apiRouter);
app.get('/', function (req, res) {
    res.send('welcome to my API 2!');
});
app.listen(port, function () {
    console.log('Running on port: ' + port);
});
//# sourceMappingURL=app.js.map