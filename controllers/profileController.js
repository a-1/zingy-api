var mongoose = require('mongoose');
var Coral = require('coral');
var authController = require('./authController');

module.exports = function (app) {

    var config = {
        path: '/api/profiles',
        model: mongoose.model('Profile'),
        middlewares: [authController.ensureAuthenticated],
        method: ['GET','PUT']
    };

    //this will create api paths
    app.use(new Coral(config));

};