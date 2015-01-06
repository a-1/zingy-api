var mongoose = require('mongoose');
var request = require('request');

function getCoordinates(next, googleMap) {
    var address = googleMap.streetOne + ", " + googleMap.streetTwo + ", " + googleMap.city + "," + googleMap.state;
    var googleMapUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
    var params = {
        address: address,
        key: 'AIzaSyBDYapybw7RhtvQugW9d4lT4Ii6bkBV8gc'
    };
    request.get({url: googleMapUrl, qs: params, json: true}, function (err, response) {
        if (response.statusCode !== 200) {
            next();
        }
        if (!response.body.results) {
            var coordinate = response.body.results[0].geometry.location;

            googleMap.loc = {
                type: 'Point',
                coordinates: [coordinate.lat, coordinate.lng]
            }
        }
        next();
    });
}

function getStaticMapCoordinates(location) {
    var googleMapUrl = 'https://maps.googleapis.com/maps/api/geocode/staticmap';
    var params = {
        zoom: '13',
        size: '133x133',
        maptype: 'roadmap',
        markers: {
            color: 'red',
            label: location
        },
        key: 'AIzaSyBDYapybw7RhtvQugW9d4lT4Ii6bkBV8gc'
    };
}

exports.getCoordinates = getCoordinates;
exports.getStaticMapCoordinates = getStaticMapCoordinates;