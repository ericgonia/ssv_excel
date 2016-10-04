/// <reference path="../typings/index.d.ts" />
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/ssv');
var School = require('./models/School');
var express = require('express');
var app = express();
var port = process.env.PORT || 3030;
// class SchoolQuery {
//     public name: String;
//     public $options: String;
// }
var schoolRouter = express.Router();
schoolRouter.route('/schools')
    .get(function (req, res) {
    var query = {};
    if (typeof req.query.name !== "undefined" && req.query.name !== "") {
        query = { "name": { $regex: ".*" + req.query.name + ".*", $options: "i" } };
    }
    School.find(query, function (err, schools) {
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
    res.send('welcome to my API 2!');
});
app.listen(port, function () {
    console.log('Running on port: ' + port);
});
//# sourceMappingURL=app.js.map