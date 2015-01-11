var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var enthusiastSchema = new Schema({
    profile: {type: Schema.Types.ObjectId, ref: 'Profile'},
    aboutYourself: String,
    sports: [
        {
            name: String,
            followingYears: Number,
            subscribeEvents: Boolean,
            subscribeOffers: Boolean
        }
    ]
});

exports = module.exports = mongoose.model('Enthusiast', enthusiastSchema);
