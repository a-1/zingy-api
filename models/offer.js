var mongoose = require('mongoose');

var offerSchema = new mongoose.Schema({
    offerTitle: {type: String, default: '', trim: true},
    offer: {type: String, default: '', trim: true}
});

exports = module.exports = mongoose.model('Offer', offerSchema);
