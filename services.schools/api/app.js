/// <reference path="../typings/index.d.ts" />
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/ssv');
var School = require('./models/School');
var express = require('express');
var app = express();
var port = process.env.PORT || 3030;
var schoolRouter = express.Router();
schoolRouter.route('/schools')
    .get(function (req, res) {
    School.find(function (err, schools) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(schools);
        }
    });
});
app.use('/api', schoolRouter);
app.get('/', function (req, res) {
    res.send('welcome to my API!');
});
app.listen(port, function () {
    console.log('Running on port: ' + port);
});
//# sourceMappingURL=app.js.map