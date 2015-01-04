var async = require('async');
var mongoose = require('mongoose');
var authController = require('./authController');

module.exports = function (app) {

    app.get('/api/account', authController.ensureAuthenticated, function (req, res) {
        mongoose.model('User').findById(req.user, null, {populate: [{path: 'enthusiast player coach facilities suppliers events offers'}]}, function (err, user) {
            if (err) {
                return res.json(err);
            }
            res.json(user);
        });
    });

    var countQuery = function(Model) {
        return function(callback) {
            Model.count({}, callback);
        };
    };

    //count query
    app.get('/api/registeredEntitiesCount', function (req, res) {

        async.parallel({
                enthusiasts: countQuery(mongoose.model('Enthusiast')),
                players: countQuery(mongoose.model('Player')),
                coaches: countQuery(mongoose.model('Coach')),
                facilities: countQuery(mongoose.model('Facility')),
                suppliers: countQuery(mongoose.model('Supplier')),
                events: countQuery(mongoose.model('Event')),
                offers: countQuery(mongoose.model('Offer'))
            },
            function(err, results) {
                if (err) {
                    return res.json(err);
                }
                res.json(results);
            });

    });


};