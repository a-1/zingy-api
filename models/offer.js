var mongoose = require('mongoose');

var offerSchema = new mongoose.Schema({
    name: {type: String, default: '', trim: true}
});

exports = module.exports = mongoose.model('Offer', offerSchema);
