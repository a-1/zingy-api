var mongoose = require('mongoose');
var locationSchema = require('./location');
var supplierSchema = new mongoose.Schema({
    title: {type: String, default: '', trim: true},
    phoneNbr: {type: String, default: '', trim: true},
    webUrl: {type: String, default: '', trim: true},
    email: {type: String, default: '', trim: true},
    speciality: {type: String, default: '', trim: true},
    location:[mongoose.model('Location').schema]
});

supplierSchema.path('webUrl').validate(function(webUrl) {
    var emailRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return emailRegex.test(webUrl);
}, 'Invalid web Url address');

exports = module.exports = mongoose.model('Supplier', supplierSchema);
