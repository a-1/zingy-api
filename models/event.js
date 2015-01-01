var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    title: {type: String, default: '', trim: true}
});

exports = module.exports = mongoose.model('Event', eventSchema);
