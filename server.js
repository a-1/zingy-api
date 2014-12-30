var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var compress = require('compression');
var logger = require('morgan');
var mongoose = require('mongoose');
var fs = require('fs');
var config = require('./config');

var corsOptions = {
    origin: true,
    methods: ['GET, POST, OPTIONS, PUT, PATCH, DELETE'],
    credentials: true
};

//initialize app
var app = express();
//config app
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(compress());
app.use(cors(corsOptions));
app.use(bodyParser.json());

//connect to mongo-db
mongoose.connect(config.MONGO_URI);
// Bootstrap models
fs.readdirSync(__dirname + '/models').forEach(function (file) {
    require(__dirname + '/models/' + file);
});

// Load all controllers
fs.readdir('./controllers', function (err, files) {
    files.forEach(function (fileName) {
        require(__dirname + '/controllers/' + fileName)(app);
    });
});

//listen express server on port mention
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

