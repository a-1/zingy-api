var config = require('../config');
var aws = require('aws-sdk');

module.exports = function (app) {

    aws.config.region = 'us-west-2';
    aws.config.update({accessKeyId: config.AWS_ACCESS_KEY, secretAccessKey: config.AWS_SECRET_KEY});

    app.get('/api/awsSignedUrl', function (req, res) {

        var s3 = new aws.S3();
        var s3_params = {
            Bucket: config.AWS_BUCKET,
            Key: req.query.id + '.jpg',
            ContentType: 'image/jpg',
            Body: ''
        };

        s3.getSignedUrl('putObject', s3_params, function (err, data) {
            if (err) {
                res.send(err);
            }
            res.send(data);
        });

    });

};