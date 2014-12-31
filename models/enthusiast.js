var mongoose = require('mongoose');
var User = require('../models/user');

var enthusiastSchema = new mongoose.Schema({
    firstName: {type: String, default: '', trim: true, required: true},
    lastName: {type: String, default: '', trim: true},
    cellPhone: {type: String, default: '', trim: true},
    workPhone: {type: String, default: '', trim: true},
    email: {type: String, default: '', trim: true},
    gender: {type: String, enum: ['male', 'female']},
    nationality: {type: String, default: '', trim: true},
    webUrl: {type: String, default: '', trim: true},
    country: {type: String, default: '', trim: true},
    facebookUrl: {type: String, default: '', trim: true},
    youTubeUrl: {type: String, default: '', trim: true},
    addrLnText1: {type: String, default: '', trim: true},
    addrLnText2: {type: String, default: '', trim: true},
    otherUrl: {type: String, default: '', trim: true},
    city: {type: String, default: '', trim: true},
    state: {type: String, default: '', trim: true},
    pinCode: {type: String, default: '', trim: true},
    date: {type: Date, default: Date.now()}
});


//validators
/*
 enthusiastSchema.path('firstName').validate(function(email) {
 var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 return emailRegex.test(email);
 }, 'Invalid firstName address');

 enthusiastSchema.path('email').validate(function(email) {
 var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 return emailRegex.test(email);
 }, 'Invalid email address');
 enthusiastSchema.path('webUrl').validate(function(webUrl) {
 var emailRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
 return emailRegex.test(webUrl);
 }, 'Invalid web Url address');
 enthusiastSchema.path('facebookUrl').validate(function(facebookUrl) {
 var emailRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
 return emailRegex.test(facebookUrl);
 }, 'Invalid facebook Url address');
 enthusiastSchema.path('youTubeUrl').validate(function(youTubeUrl) {
 var emailRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
 return emailRegex.test(youTubeUrl);
 }, 'Invalid youTube Url address');
 */

mongoose.model('Enthusiast', enthusiastSchema);
