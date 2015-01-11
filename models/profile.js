var mongoose = require('mongoose');

var profileSchema = new mongoose.Schema({
    firstName: {type: String, default: ''},
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
    loc: {
        type: {type: String},
        coordinates: {type: [Number], index: '2dsphere'}
    }
});

exports = module.exports = mongoose.model('Profile', profileSchema);
