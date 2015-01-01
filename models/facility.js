var mongoose = require('mongoose');

var facilitySchema = new mongoose.Schema({
    title: {type: String, default: '', trim: true}
});

exports = module.exports = mongoose.model('Facility', facilitySchema);
