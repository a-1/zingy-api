var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    sports: [
        {
            name: String,
            experienceYears: Number,
            playingFrequency: String,
            startTime: {type: Date, default: ''},
            endTime: {type: Date, default: ''},
            streetOne: {type: String, default: ''},
            streetTwo: {type: String, default: ''},
            city: {type: String, default: ''},
            state: {type: String, default: ''},
            pin: {type: String, default: ''}
        }
    ]
});

exports = module.exports = mongoose.model('Player', playerSchema);
