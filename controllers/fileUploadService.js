var config = require('../config');
var aws = require('aws-sdk');
module.exports = function(app){
    app.get('/api/signedUrl',function(req,res){
        aws.config.region= 'us-west-2';
        aws.config.update({accessKeyId: config.AWS_ACCESS_KEY, secretAccessKey: config.AWS_SECRET_KEY});
        var s3 = new aws.S3();
        console.log(req.query);
        var s3_params = {
            Bucket: config.AWS_BUCKET,
            Key: req.query.id+'.png',
            ContentType:'image/png',
            Body: ''
        };
        s3.getSignedUrl('putObject', s3_params, function (err, data) {
            if (err) {
                res.send(err);
            }
            else {
                res.send(data);
            }
        });
    });

};