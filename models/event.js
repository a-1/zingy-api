var mongoose = require('mongoose');
var venue = require('./venue');
var eventSchema = new mongoose.Schema({
    eventName: {type: String, default: '', trim: true},
    venue:[mongoose.model('Venue').schema]
});

exports = module.exports = mongoose.model('Event', eventSchema);
