var mongoose = require('mongoose');
var venueSchema = new mongoose.Schema({
    venueName: {type: String, default: '', trim: true},
    venueAddress: {type: String, default: '', trim: true},
    state: {type: String, default: '', trim: true},
    city: {type: String, default: '', trim: true},
    pinCode: {type: Number, default: '', trim: true}
});

exports = module.exports = mongoose.model('Venues', venueSchema);
