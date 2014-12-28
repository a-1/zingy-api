var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    email: {type: String, unique: true, lowercase: true},
    password: {type: String, select: false},
    displayName: String,
    facebook: String,
    google: String,
    enthusiast: { type: Schema.ObjectId, ref: mongoose.model('Enthusiast').schema },
    player: { type: Schema.ObjectId, ref: mongoose.model('Player').schema },
    coach: { type: Schema.ObjectId, ref: mongoose.model('Coach').schema },
    facilities: [ { type: Schema.ObjectId, ref: mongoose.model('Facility').schema } ],
    suppliers: [ { type: Schema.ObjectId, ref: mongoose.model('Supplier').schema } ],
    events: [ { type: Schema.ObjectId, ref: mongoose.model('Event').schema } ],
    offers: [ { type: Schema.ObjectId, ref: mongoose.model('Offer').schema } ]
});


userSchema.pre('save', function (next) {
    var user = this;
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (password, done) {
    bcrypt.compare(password, this.password, function (err, isMatch) {
        done(err, isMatch);
    });
};

exports = module.exports = mongoose.model('User', userSchema);
