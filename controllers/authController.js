var qs = require('querystring');
var jwt = require('jwt-simple');
var moment = require('moment');
var request = require('request');
var config = require('../config');
var User = require('../models/user');

function ensureAuthenticated(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send({message: 'Please make sure your request has an Authorization header'});
    }
    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, config.TOKEN_SECRET);
    if (payload.exp <= moment().unix()) {
        return res.status(401).send({message: 'Token has expired'});
    }
    req.user = payload.sub;
    next();
}

function getCurrentUser(req, res) {
    if (!req.headers.authorization) {
        return res.status(401).send({message: 'Please make sure your request has an Authorization header'});
    }
    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, config.TOKEN_SECRET);
    if (payload.exp <= moment().unix()) {
        return res.status(401).send({message: 'Token has expired'});
    }
    return payload.sub;
}

function createToken(user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, config.TOKEN_SECRET);
}

exports = module.exports = function (app) {

    app.post('/api/auth/login', function (req, res) {
        User.findOne({email: req.body.email}, '+password', function (err, user) {
            if (!user) {
                return res.status(401).send({message: 'Wrong email and/or password'});
            }
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (!isMatch) {
                    return res.status(401).send({message: 'Wrong email and/or password'});
                }
                res.send({token: createToken(user)});
            });
        });
    });

    app.post('/api/auth/signup', function (req, res) {
        User.findOne({email: req.body.email}, function (err, existingUser) {
            if (existingUser) {
                return res.status(409).send({message: 'Email is already taken'});
            }
            var user = new User({
                displayName: req.body.displayName,
                email: req.body.email,
                password: req.body.password
            });
            user.save(function () {
                res.send({token: createToken(user)});
            });
        });
    });

    app.post('/api/auth/google', function (req, res) {
        var accessTokenUrl = 'https://accounts.google.com/o/oauth2/token';
        var peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
        var params = {
            code: req.body.code,
            client_id: req.body.clientId,
            client_secret: config.GOOGLE_SECRET,
            redirect_uri: req.body.redirectUri,
            grant_type: 'authorization_code'
        };

        // Step 1. Exchange authorization code for access token.
        request.post(accessTokenUrl, {json: true, form: params}, function (err, response, token) {
            var accessToken = token.access_token;
            var headers = {Authorization: 'Bearer ' + accessToken};

            // Step 2. Retrieve profile information about the current user.
            request.get({url: peopleApiUrl, headers: headers, json: true}, function (err, response, profile) {

                // Step 3a. Link user accounts.
                if (req.headers.authorization) {
                    User.findOne({google: profile.sub}, function (err, existingUser) {
                        if (existingUser) {
                            return res.status(409).send({message: 'There is already a Google account that belongs to you'});
                        }
                        var token = req.headers.authorization.split(' ')[1];
                        var payload = jwt.decode(token, config.TOKEN_SECRET);
                        User.findById(payload.sub, function (err, user) {
                            if (!user) {
                                return res.status(400).send({message: 'User not found'});
                            }
                            user.google = profile.sub;
                            user.displayName = user.displayName || profile.name;
                            user.save(function () {
                                var token = createToken(user);
                                res.send({token: token});
                            });
                        });
                    });
                } else {
                    // Step 3b. Create a new user account or return an existing one.
                    User.findOne({google: profile.sub}, function (err, existingUser) {
                        if (existingUser) {
                            return res.send({token: createToken(existingUser)});
                        }
                        var user = new User();
                        user.google = profile.sub;
                        user.displayName = profile.name;
                        user.email = profile.email;
                        user.save(function (err) {
                            var token = createToken(user);
                            res.send({token: token});
                        });
                    });
                }
            });
        });
    });

    app.post('/api/auth/facebook', function (req, res) {
        var accessTokenUrl = 'https://graph.facebook.com/oauth/access_token';
        var graphApiUrl = 'https://graph.facebook.com/me';
        var params = {
            code: req.body.code,
            client_id: req.body.clientId,
            client_secret: config.FACEBOOK_SECRET,
            redirect_uri: req.body.redirectUri
        };

        // Step 1. Exchange authorization code for access token.
        request.get({url: accessTokenUrl, qs: params, json: true}, function (err, response, accessToken) {
            if (response.statusCode !== 200) {
                return res.status(500).send({message: accessToken.error.message});
            }
            accessToken = qs.parse(accessToken);

            // Step 2. Retrieve profile information about the current user.
            request.get({url: graphApiUrl, qs: accessToken, json: true}, function (err, response, profile) {
                if (response.statusCode !== 200) {
                    return res.status(500).send({message: profile.error.message});
                }


                if (req.headers.authorization) {
                    User.findOne({facebook: profile.id}, function (err, existingUser) {
                        if (existingUser) {
                            return res.status(409).send({message: 'There is already a Facebook account that belongs to you'});
                        }
                        var token = req.headers.authorization.split(' ')[1];
                        var payload = jwt.decode(token, config.TOKEN_SECRET);
                        User.findById(payload.sub, function (err, user) {
                            if (!user) {
                                return res.status(400).send({message: 'User not found'});
                            }
                            user.facebook = profile.id;
                            user.displayName = user.displayName || profile.name;
                            user.save(function () {
                                var token = createToken(user);
                                res.send({token: token});
                            });
                        });
                    });
                } else {
                    // Step 3b. Create a new user account or return an existing one.
                    User.findOne({facebook: profile.id}, function (err, existingUser) {
                        if (existingUser) {
                            var token = createToken(existingUser);
                            return res.send({token: token});
                        }
                        var user = new User();
                        user.facebook = profile.id;
                        user.displayName = profile.name;
                        user.email = profile.email;
                        user.save(function () {
                            var token = createToken(user);
                            res.send({token: token});
                        });
                    });
                }
            });
        });
    });

    app.get('/api/auth/unlink/:provider', ensureAuthenticated, function (req, res) {
        var provider = req.params.provider;
        User.findById(req.user, function (err, user) {
            if (!user) {
                return res.status(400).send({message: 'User not found'});
            }
            user[provider] = undefined;
            user.save(function () {
                res.status(200).end();
            });
        });
    });

};

// Login Required middleware.
exports.ensureAuthenticated = ensureAuthenticated;
exports.getCurrentUser = getCurrentUser;
