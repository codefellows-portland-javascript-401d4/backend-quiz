const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({

  title: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: ['animals', 'food', 'places'] },
  url: { type: String, require: true }

});

module.exports = mongoose.model('Image', imageSchema);