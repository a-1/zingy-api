var async = require('async');
var mongoose = require('mongoose');

module.exports = function (app) {

    var searchQuery = function(Model, city) {
        return function(callback) {
            Model.find({city: city}, callback);
        };
    };

    //count query
    app.get('/api/search', function (req, res) {

        var city = req.query.city;

        async.parallel({
                enthusiasts: searchQuery(mongoose.model('Enthusiast'), city),
                players: searchQuery(mongoose.model('Player'), city),
                coaches: searchQuery(mongoose.model('Coach'), city),
                facilities: searchQuery(mongoose.model('Facility'), city),
                suppliers: searchQuery(mongoose.model('Supplier'), city),
                events: searchQuery(mongoose.model('Event'), city),
                offers: searchQuery(mongoose.model('Offer'), city)
            },
            function(err, results) {
                if (err) {
                    return res.json(err);
                }
                res.json(results);
            });

    });


};