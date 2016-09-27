/// <reference path="../../typings/index.d.ts" />
var mongoose = require('mongoose');
//var Schema = mongoose.Schema();

var school = mongoose.Schema({
    name: { type: String }
});

module.exports = mongoose.model('School', school);