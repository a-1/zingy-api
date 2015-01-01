var mongoose = require('mongoose');
var Coral = require('coral');
var authController = require('./authController');

module.exports = function (app) {

    var config = {
        path: '/api/offers',
        model: mongoose.model('Offer'),
        middlewares: [authController.ensureAuthenticated],
        updateRef: {
            model: mongoose.model('User'),
            path: 'offers',
            findOneId: authController.getCurrentUser
        }
    };

    //this will create api paths
    app.use(new Coral(config));

};