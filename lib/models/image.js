/** Created by Gloria Anholt on 11/28/16. **/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({

  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ['animals', 'food', 'places'], required: true },
  url: String

});


module.exports = mongoose.model('Image', imageSchema);