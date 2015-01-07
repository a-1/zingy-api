var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    organiser: {type: String, default: ''},
    heading: {type: String, default: ''},
    description: {type: String, default: ''},
    date: {type: Date, default: ''},
    startTime: {type: Date, default: ''},
    endTime: {type: Date, default: ''},
    streetOne: {type: String, default: ''},
    streetTwo: {type: String, default: ''},
    city: {type: String, default: ''},
    state: {type: String, default: ''},
    pin: {type: String, default: ''},
    email: {type: String, default: ''},
    phoneOne: {type: String, default: ''},
    phoneTwo: {type: String, default: ''},
    url: {type: String, default: ''}
});

exports = module.exports = mongoose.model('Event', eventSchema);
