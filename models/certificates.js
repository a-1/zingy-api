var mongoose = require('mongoose');
var certificateSchema = new mongoose.Schema({
    certName: {type: String, default: '', trim: true},
    certBody: {type: String, default: '', trim: true},
    validFrom: {type: Date, default: '', trim: true},
    validTo: {type: Date, default: Date.now(), trim: true}
});

certificateSchema.path('validTo').validate(function(validTo) {
    return (this.validFrom <= validTo);
}, 'invalid start Date');

exports = module.exports = mongoose.model('Certificate', certificateSchema);
