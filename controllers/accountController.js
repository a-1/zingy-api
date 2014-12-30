var User = require('../models/user');
var authController = require('./authController');

module.exports = function (app) {

    app.get('/api/account', authController.ensureAuthenticated, function (req, res) {
        User.findById(req.user, function (err, user) {
            res.send(user);
        });
    });

};
