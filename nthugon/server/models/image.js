// {
//     title: <title>,
//     description: <description>,
//     category: <animals|food|places>,
//     url: <url>
// }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  category: {
    type: String,
    requied: true
  },
  url: {
    type: String,
    required: true
  }

});

// TODO: category should be limited to one of specified values (animals|food|places)

module.exports = mongoose.model('Image', imageSchema);
