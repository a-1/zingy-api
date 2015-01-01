var mongoose = require('mongoose');

var coachSchema = new mongoose.Schema({
    sport: {type: String, default: '', trim: true},
    experience: {type: Number, default: '', trim: true}
});

exports = module.exports = mongoose.model('Coach', coachSchema);
