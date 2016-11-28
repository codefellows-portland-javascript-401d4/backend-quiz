'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  parent: {
    type: Schema.Types.ObjectId
  },

  type: String,

  name: [animals, food, places],
  
  default: ''
});

module.exports = mongoose.model('Category', categorySchema);
