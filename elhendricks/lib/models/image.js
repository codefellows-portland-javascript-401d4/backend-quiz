const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema ({
    title: {type: String, required: true},
    description: {type: String, required: true},

    //TODO: check if this works
    category: {type: String},
    url: {type: String, required: true} 
});

module.exports = mongoose.model('Image', schema);