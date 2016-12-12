'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  parent: {
    type: Schema.Types.ObjectId
  },

  name: {
    type: String,
    value: ['animals', 'food', 'places'],
    default: ''
  }
});

module.exports = mongoose.model('Category', categorySchema);
