var mongoose = require('mongoose');
var Coral = require('coral');
var authController = require('./authController');

module.exports = function (app) {

    var config = {
        path: '/api/suppliers',
        model: mongoose.model('Supplier'),
        middlewares: [authController.ensureAuthenticated],
        updateRef: {
            model: mongoose.model('User'),
            path: 'suppliers',
            findOneId: authController.getCurrentUser
        }
    };

    //this will create api paths
    app.use(new Coral(config));

};