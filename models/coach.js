var mongoose = require('mongoose');
var coachingDetails = require('./coachingDetails');
var certificates = require('./certificates');
var venues = require('./venue');
var coachSchema = new mongoose.Schema({
    name: {type: String, default: '', trim: true},
    sports: {type: String, default: '', trim: true},
    experience: {type: Number, default: '', trim: true},
    comments: {type: String, default: '', trim: true, max:500},
    privateCoaching:{type: Boolean, default: false,trim: true},
    freeTrials:{type: Boolean, default: false,trim: true},
    certificates:[ mongoose.model('Certificate').schema],
    coachingDetails: [ mongoose.model('CoachingDetail').schema ],
    venues:[mongoose.model('Venue').schema]
});

exports = module.exports = mongoose.model('Coach', coachSchema);
