var mongoose = require('mongoose');
var Coral = require('coral');
var authController = require('./authController');

module.exports = function (app) {

    var config = {
        path: '/api/enthusiasts',
        model: mongoose.model('Enthusiast'),
        methods: ['GET', 'POST', 'PUT'],
        middlewares:[authController.ensureAuthenticated],
        updateRef: {
            model: mongoose.model('User'),
            path: 'enthusiast',
            findOneId: authController.getCurrentUser
        }
    };

    //this will create api paths
    app.use(new Coral(config));

};