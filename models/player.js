var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
    name: {type: String, default: '', trim: true}
});

exports = module.exports = mongoose.model('Player', playerSchema);
