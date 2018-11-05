'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category = require('./category');

const imageSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String
  },

  categoryName: [{
    type: Schema.Types.ObjectId,
    ref: 'Category', 
    required: true
  }],

  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Image', imageSchema);
