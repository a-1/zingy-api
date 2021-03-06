var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: { type: String, select: false },
    displayName: String,
    facebook: String,
    google: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    profile: {type: Schema.Types.ObjectId, ref: 'Profile'},
    enthusiast: {type: Schema.Types.ObjectId, ref: 'Enthusiast'},
    player: {type: Schema.Types.ObjectId, ref: 'Player'},
    coach: {type: Schema.Types.ObjectId, ref: 'Coach'},
    facilities: [{type: Schema.Types.ObjectId, ref: 'Facility'}],
    suppliers: [{type: Schema.Types.ObjectId, ref: 'Supplier'}],
    events: [{type: Schema.Types.ObjectId, ref: 'Event'}],
    offers: [{type: Schema.Types.ObjectId, ref: 'Offer'}]
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
