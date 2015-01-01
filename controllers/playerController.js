var mongoose = require('mongoose');
var Coral = require('coral');
var authController = require('./authController');

module.exports = function (app) {

    var config = {
        path: '/api/players',
        model: mongoose.model('Player'),
        middlewares: [authController.ensureAuthenticated],
        updateRef: {
            model: mongoose.model('User'),
            path: 'player',
            findOneId: authController.getCurrentUser
        }
    };

    //this will create api paths
    app.use(new Coral(config));

};