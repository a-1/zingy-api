var config = require('../config');

function fileUploadToAws(filePath, image) {
    var AWS = require('aws-sdk');

    AWS.config.region = 'us-west-2';
    AWS.config.update({accessKeyId: config.AWS_ACCESS_KEY, secretAccessKey: config.AWS_SECRET_KEY});

    var s3 = new AWS.S3();
    s3.putObject({
        Bucket: config.AWS_BUCKET,
        Key: filePath,
        Body: image
    }, function (err) {
        if (err) {
            throw err;
        }
    })

};

exports.fileUploadToAws = fileUploadToAws;