var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var coachSchema = new mongoose.Schema({
    name: {type: String, default: '', trim: true},
    sports: {type: String, default: '', trim: true},
    experience: {type: Number, default: '', trim: true},
    comments: {type: String, default: '', trim: true, max:500},
    privateCoaching:{type: Boolean, default: false,trim: true},
    freeTrials:{type: Boolean, default: false,trim: true},
    certificates:[ mongoose.model('Certificate').schema],
    coachingDetails: [ mongoose.model('CoachingDetails').schema ],
    venues:[mongoose.model('Venues').schema]
});

exports = module.exports = mongoose.model('Coach', coachSchema);
