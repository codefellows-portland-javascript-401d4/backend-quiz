const mongoose = require('mongoose');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: [ true, 'must have a title' ]
  },
  description: {
    type: String
  },
  category: {
    type: String,
    lowercase: true,
    enum: [ 'animals', 'food', 'places' ],
    required: [ true, 'must have a category' ]
  },
  url: {
    type: String,
    required: [ true, 'must have a URL' ]
  }
}
, {

});

module.exports = mongoose.model('Image', schema);