var mongoose = require('mongoose');

var facilitySchema = new mongoose.Schema({
    facilityName: {type: String, default: '', trim: true},
    facilityLocation: {type: String, default: '', trim: true},
    facilityAddress: {type: String, default: '', trim: true},
    phoneNbr: {type: String, default: '', trim: true},
    speciality: {type: String, default: '', trim: true}
});

exports = module.exports = mongoose.model('Facility', facilitySchema);
