"use strict";
var mongoose = require('mongoose');
var School_1 = require('../models/School');
var School = mongoose.model('School', School_1.default);
var SchoolRepository = (function () {
    function SchoolRepository() {
    }
    SchoolRepository.findAll = function () {
        return new Promise(function (resolve, reject) {
            School.find(function (err, res) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(res);
            });
        });
    };
    SchoolRepository.findByName = function (nameSearch) {
        return new Promise(function (resolve, reject) {
            var query = { "name": { $regex: ".*" + nameSearch + ".*", $options: "i" } };
            School.find(query, function (err, schools) {
                if (err) {
                    reject(err);
                }
                resolve(schools);
            });
        });
    };
    return SchoolRepository;
}());
exports.SchoolRepository = SchoolRepository;
//# sourceMappingURL=SchoolRepository.js.map