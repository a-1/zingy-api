var mongoose = require('mongoose');

var enthusiastSchema = new mongoose.Schema({
    firstName: {type: String, default: '', trim: true, required: true},
    lastName: {type: String, default: '', trim: true},
    cellPhone: {type: String, default: '', trim: true},
    workPhone: {type: String, default: '', trim: true},
    email: {type: String, default: '', trim: true},
    gender: {type: String, enum: ['male', 'female']},
    nationality: {type: String, default: '', trim: true},
    webUrl: {type: String, default: '', trim: true},
    country: {type: String, default: '', trim: true},
    facebookUrl: {type: String, default: '', trim: true},
    youTubeUrl: {type: String, default: '', trim: true},
    addrLnText1: {type: String, default: '', trim: true},
    addrLnText2: {type: String, default: '', trim: true},
    otherUrl: {type: String, default: '', trim: true},
    city: {type: String, default: '', trim: true},
    state: {type: String, default: '', trim: true},
    pinCode: {type: String, default: '', trim: true},
    date: {type: Date, default: Date.now()}
});

exports = module.exports = mongoose.model('Enthusiast', enthusiastSchema);
