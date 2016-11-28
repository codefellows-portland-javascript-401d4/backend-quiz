const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const categories = ['animals', 'food', 'places'];
const image = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  category: {
    type: String,
    enum: categories,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const Image = mongoose.model('Image', image);

module.exports = Image;