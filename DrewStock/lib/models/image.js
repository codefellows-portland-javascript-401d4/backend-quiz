const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaImages = new Schema ({

  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
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

module.exports = mongoose.model('Image', schemaImages);
