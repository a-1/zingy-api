var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    sport: {type: String, default: '', trim: true}
});

exports = module.exports = mongoose.model('Player', playerSchema);
