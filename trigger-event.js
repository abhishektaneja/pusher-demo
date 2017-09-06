var Pusher = require('pusher');
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

var args = process.argv.slice(2);

var pusher = new Pusher({
    appId: '396115',
    key: config.key,
    secret: config.secret,
    cluster: 'eu',
    encrypted: true
});


if (args.length == 3) {

    pusher.trigger('get-bookings-1', 'booking-success', {
        "message": '{"id": "' + args[0] + '", "hotelName": "' + args[1] + '", "date": "' + args[2] + '"}'
    });
}