const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slugs');

const textcloudSchema = new mongoose.Schema({
  _id: String,
});

module.exports = mongoose.model('textCloud', textcloudSchema, 'WordCloud');