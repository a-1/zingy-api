var mongoose = require('mongoose');
var Coral = require('coral');
var authController = require('./authController');
module.exports = function (app) {

    var config = {
        path: '/api/coaches',
        model: mongoose.model('Coach'),
        middlewares: [authController.ensureAuthenticated],
        query:{
          options:{
              populate:'profile'
          }
        },
        updateRef: {
            model: mongoose.model('User'),
            path: 'coach',
            findOneId: authController.getCurrentUser
        }
    };

    //this will create api paths
    app.use(new Coral(config));

};