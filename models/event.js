var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    eventName: {type: String, default: '', trim: true},
    venue:[mongoose.model('Venues').schema]
});

exports = module.exports = mongoose.model('Event', eventSchema);
