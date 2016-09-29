/// <reference path="../../typings/index.d.ts" />
var mongoose = require('mongoose');
//var Schema = mongoose.Schema();
var school = mongoose.Schema({
    name: { type: String },
    contacts: [
        {
            isSponsor: Boolean,
            isPrimary: Boolean,
            title: String,
            mobilePhone: String,
            officePhone: String,
            lastName: String,
            firstName: String
        }
    ],
    addresses: [
        {
            type: { type: String },
            zip: String,
            state: String,
            city: String,
            streetAddress: String
        }
    ],
    machines: [
        {
            type: { type: String }
        }
    ]
});
module.exports = mongoose.model('School', school);
//# sourceMappingURL=School.js.map