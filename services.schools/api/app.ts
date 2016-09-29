/// <reference path="../typings/index.d.ts" />
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/ssv');
var School = require('./models/School');
var express = require('express');
var app = express();
var port = process.env.PORT || 3030;

class SchoolQuery {
    name: RegExp
}

var schoolRouter = express.Router();
schoolRouter.route('/schools')
    .get((req: any, res: any) => {
        var query = new SchoolQuery();
        if (typeof req.query.name !== "undefined" && req.query.name !== "") {
            query.name = new RegExp(".*" + req.query.name + ".*");
            query.name.ignoreCase = true;
        }
        School.find(query, (err: any, schools: any) => {
            if (err) {
                console.log(err);
            } else {
                res.json(schools);
            }
        });
    });

app.use('/api', schoolRouter);

app.get('/', function(req, res) {
    res.send('welcome to my API 2!');
});

app.listen(port, function() {
    console.log('Running on port: ' + port);
});