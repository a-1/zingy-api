var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var coachSchema = new Schema({
    profile: {type: Schema.Types.ObjectId, ref: 'Profile'},
    aboutCoaching: String,
    sports: [
        {
            name: String,
            experienceYears: Number,
            coachingMen: Boolean,
            menFromAge: Number,
            menToAge: Number,
            menCharges: Number,
            coachingWomen: Boolean,
            womenFromAge: Number,
            womenToAge: Number,
            womenCharges: Number,
            coachingKids: Boolean,
            kidsFromAge: Number,
            kidsToAge: Number,
            kidsCharges: Number,
            privateCoaching: Boolean,
            freeTrialClasses: Boolean,
            coachingFrequency: String,
            startTime: {type: Date, default: ''},
            endTime: {type: Date, default: ''},
            streetOne: {type: String, default: ''},
            streetTwo: {type: String, default: ''},
            city: {type: String, default: ''},
            state: {type: String, default: ''},
            pin: {type: String, default: ''},
            loc: {
                type: {type: String},
                coordinates: {type: [Number], index: '2dsphere'}
            },
            certificationName: {type: String, default: ''},
            certificationBody: {type: String, default: ''},
            certificationValidFrom: {type: Date, default: ''},
            certificationValidTo: {type: Date, default: ''}
        }
    ]
});

exports = module.exports = mongoose.model('Coach', coachSchema);
