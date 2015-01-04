var mongoose = require('mongoose');
var config = require('../config');
var fileUploader = require('../controllers/fileUploadController');
var googleMapsCoordinate = require('../controllers/googleMapsController');
var User = require('../models/user');
var request = require('request');

var offerSchema = new mongoose.Schema({
    provider: {type: String, default: ''},
    imgUrl: {type: String, default: ''},
    heading: {type: String, default: ''},
    description: {type: String, default: ''},
    startDate: {type: Date, default: ''},
    endDate: {type: Date, default: ''},
    streetOne: {type: String, default: ''},
    streetTwo: {type: String, default: ''},
    city: {type: String, default: ''},
    state: {type: String, default: ''},
    pin: {type: String, default: ''},
    email: {type: String, default: ''},
    phoneOne: {type: String, default: ''},
    phoneTwo: {type: String, default: ''},
    url: {type: String, default: ''},
    loc: {
        type: {type: String},
        coordinates: {type: [Number], index: '2dsphere'}
    }
});

offerSchema.pre('save', function (next) {
    var googleMap = this;
    googleMapsCoordinate.getCoordinates(next, this)
});

offerSchema.post('save', function (doc) {
    var filePath = "offer/" + doc._id.toString();
    if (this.imgUrl) {
        fileUploader.fileUploadToAws(filePath, this.imgUrl);
        mongoose.model('Offer').findByIdAndUpdate(this._id, {imgUrl: null});
    }
});


exports = module.exports = mongoose.model('Offer', offerSchema);
