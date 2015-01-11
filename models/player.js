var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
    profile: {type: Schema.Types.ObjectId, ref: 'Profile'},
    aboutPlaying: String,
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
            pin: {type: String, default: ''},
            loc: {
                type: {type: String},
                coordinates: {type: [Number], index: '2dsphere'}
            }
        }
    ]
});

exports = module.exports = mongoose.model('Player', playerSchema);
