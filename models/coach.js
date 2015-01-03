var mongoose = require('mongoose');

var coachSchema = new mongoose.Schema({
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
            coachingFrequency: String,
            startTime: {type: Date, default: ''},
            endTime: {type: Date, default: ''},
            streetOne: {type: String, default: ''},
            streetTwo: {type: String, default: ''},
            city: {type: String, default: ''},
            state: {type: String, default: ''},
            pin: {type: String, default: ''},
            certificationName: {type: String, default: ''},
            certificationBody: {type: String, default: ''},
            certificationValidFrom: {type: Date, default: ''},
            certificationValidTo: {type: Date, default: ''},
            certificationImgUrl: {type: String, default: ''}
        }
    ]
});

exports = module.exports = mongoose.model('Coach', coachSchema);
