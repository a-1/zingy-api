var mongoose = require('mongoose');

var supplierSchema = new mongoose.Schema({
    name: {type: String, default: '', trim: true}
});

exports = module.exports = mongoose.model('Supplier', supplierSchema);
