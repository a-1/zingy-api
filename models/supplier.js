var mongoose = require('mongoose');

var supplierSchema = new mongoose.Schema({
    storeName: {type: String, default: '', trim: true},
    storeLocation: {type: String, default: '', trim: true},
    storeAddress: {type: String, default: '', trim: true},
    pincode: {type: Number, default: '', trim: true},
    phoneNbr: {type: String, default: '', trim: true},
    speciality: {type: String, default: '', trim: true}
});

exports = module.exports = mongoose.model('Supplier', supplierSchema);
