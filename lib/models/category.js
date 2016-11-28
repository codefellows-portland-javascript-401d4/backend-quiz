'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: [animals, food, places]
});

module.exports = mongoose.model('Category', schema);
