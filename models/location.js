var mongoose = require('mongoose');
var locationSchema = new mongoose.Schema({
    addressLine1: {type: String, default: '', trim: true},
    addressLine2: {type: String, default: '', trim: true},
    state: {type: String, default: '', trim: true},
    city: {type: String, default: '', trim: true},
    pinCode: {type: Number, default: '', trim: true}

});

exports = module.exports = mongoose.model('Location', locationSchema);
