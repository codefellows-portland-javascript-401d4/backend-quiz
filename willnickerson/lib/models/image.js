const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    default: ''
  },

  category: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  }
});

schema.path('category').validate(function(category){
  const categories = ['animals', 'food', 'places'];
  if(categories.indexOf(category) === -1) return false;
  return true;
});

module.exports = mongoose.model('Image', schema);
