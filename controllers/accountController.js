var mongoose = require('mongoose');
var authController = require('./authController');

module.exports = function (app) {

    app.get('/api/account', authController.ensureAuthenticated, function (req, res) {
        mongoose.model('User').findById(req.user, null, {populate: [{path: 'facilities suppliers events offers'}]}, function (err, user) {
            if (err) {
                return res.json(err);
            }
            res.send(user);
        });
    });

};

;

