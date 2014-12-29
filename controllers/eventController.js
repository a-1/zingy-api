var mongoose = require('mongoose');
var Coral = require('coral');

module.exports = function (app) {

    var config = {
        path: '/api/event',
        model: mongoose.model('Event'),
        methods: ['GET', 'POST', 'PUT']
    };

    //this will create api paths
    app.use(new Coral(config));

};