'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ClassSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the class'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Description:{
    type : String,
    required: 'The description of the class'
  },
  Hit_Die: {
    type: [{
      type: String,
    }],
    default: ['d20']
  },
  Primary_Ability: {
    type: [{
      type: String,
    }],
    default: ['']
  },
  Saves: {
    type: [{
      type: String,
    }],
    default: ['']
  },
  Image_Url:{
    type:[{
      type : String,
    }],
    default : ['http://www.enworld.org/forum/attachment.php?attachmentid=82134&d=1489601454']
  }
});

module.exports = mongoose.model('Classes', ClassSchema);