var mongoose = require('mongoose');
var Coral = require('coral');
var authController = require('./authController');

module.exports = function (app) {

    var config = {
        path: '/api/offers',
        model: mongoose.model('Offer'),
        updateRef: {
            model: mongoose.model('User'),
            path: 'offers',
            findOneId: authController.getCurrentUser
        }
    };

    //get api is public
    config.method = ['GET'];
    app.use(new Coral(config));

    //update, delete is authenticated
    config.middlewares = [authController.ensureAuthenticated];
    config.method = ['POST', 'PUT', 'DELETE'];
    app.use(new Coral(config));

};