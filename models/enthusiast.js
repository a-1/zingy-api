var mongoose = require('mongoose');

var enthusiastSchema = new mongoose.Schema({
    firstName: {type: String, default: '', required: true},
    lastName: {type: String, default: ''},
    gender: {type: String, enum: ['Male', 'Female']},
    birthDate: {type: Date},
    nationality: {type: String, default: ''},
    email: {type: String, default: ''},
    cellPhone: {type: String, default: ''},
    workPhone: {type: String, default: ''},
    streetOne: {type: String, default: ''},
    streetTwo: {type: String, default: ''},
    city: {type: String, default: ''},
    state: {type: String, default: ''},
    pin: {type: String, default: ''},
    facebookUrl: {type: String, default: ''},
    youtubeUrl: {type: String, default: ''},
    websiteUrl: {type: String, default: ''},
    otherUrl: {type: String, default: ''},
    profileImgUrl: {type: String, default: ''},
    galleryImgUrl: {type: String, default: ''}
});

exports = module.exports = mongoose.model('Enthusiast', enthusiastSchema);
