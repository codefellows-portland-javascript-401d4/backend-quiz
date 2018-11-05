const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  category: {
    type: String,
    enum: ['animals', 'food', 'places'],
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Image', imageSchema);