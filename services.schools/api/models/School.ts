var mongoose = require('mongoose');
var Schema = mongoose.Schema();

var school = new Schema({
    name: { type: String }
});

module.exports = mongoose.model('School', school);