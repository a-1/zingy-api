var mongoose = require('mongoose');
var Coral = require('coral');

module.exports = function (app) {

    console.log(mongoose.model('User'));

    var config = {
        path: '/api/enthusiasts',
        model: mongoose.model('Enthusiast'),
        methods: ['GET', 'POST', 'PUT']
    };

    //this will create api paths
    app.use(new Coral(config));

};