const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const category =  ['animals', 'food', 'places'];

const schema = new Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String
  },

  category: {
    type: String,
    required: true,
    enum: category
  },

  url: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Img', schema);
