var mongoose = require('mongoose');
var locationSchema =  require('./location');
var venueSchema = new mongoose.Schema({
    title: {type: String, default: '', trim: true},
    location: [mongoose.model('Location').schema]
});

exports = module.exports = mongoose.model('Venue', venueSchema);
