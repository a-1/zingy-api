var mongoose = require('mongoose');

var supplierSchema = new mongoose.Schema({
    title: {type: String, default: '', trim: true}
});

exports = module.exports = mongoose.model('Supplier', supplierSchema);
