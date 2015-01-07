var mongoose = require('mongoose');

var supplierSchema = new mongoose.Schema({
    name: {type: String, default: ''},
    speciality: {type: String, default: ''},
    description: {type: String, default: ''},
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

exports = module.exports = mongoose.model('Supplier', supplierSchema);
