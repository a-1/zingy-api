var mongoose = require('mongoose');

var coachingDetailsSchema = new mongoose.Schema({
    gender: {type: String, default: '', trim: true},
    ageFrom: {type: Number, default: '', trim: true},
    ageTo: {type: Number, default: '', trim: true},
    chargesFrom: {type: String, default: '', trim: true},
    chargesTo: {type: String, default: '', trim: true}

});

exports = module.exports = mongoose.model('CoachingDetail', coachingDetailsSchema);
