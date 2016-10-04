/// <reference path="../../typings/index.d.ts" />
import * as mongoose from 'mongoose';
//var Schema = mongoose.Schema();

var school = new mongoose.Schema(
    {
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
  }
);

export default school;