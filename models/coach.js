var mongoose = require('mongoose');

var coachSchema = new mongoose.Schema({
    name: {type: String, default: '', trim: true}
});

exports = module.exports = mongoose.model('Coach', coachSchema);
