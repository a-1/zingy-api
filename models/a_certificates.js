var mongoose = require('mongoose');
var certificateSchema = new mongoose.Schema({
    certName: {type: String, default: '', trim: true},
    certBody: {type: String, default: '', trim: true},
    validFrom: {type: Date, default: '', trim: true},
    validTo: {type: Date, default: Date.now(), trim: true}
});

exports = module.exports = mongoose.model('Certificate', certificateSchema);
