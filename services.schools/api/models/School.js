"use strict";
/// <reference path="../../typings/index.d.ts" />
var mongoose = require('mongoose');
//var Schema = mongoose.Schema();
var schoolSchema = new mongoose.Schema({
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = schoolSchema;
//# sourceMappingURL=School.js.map