const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for 'Images'
const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: 'animals' || 'food' || 'places'
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Images', schema);
