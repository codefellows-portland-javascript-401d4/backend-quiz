const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  url: String,
  required: true
});

module.exports = mongoose.model('Image', imageSchema);