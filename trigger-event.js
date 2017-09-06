var Pusher = require('pusher');
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

var args = process.argv.slice(2);

var pusher = new Pusher({
    appId: config.appId,
    key: config.key,
    secret: config.secret,
    cluster: 'eu',
    encrypted: true
});


if (args.length == 4) {

    var userId = args[0];
    var bookingId = args[1];
    var hotelName = args[2];
    var bookingDate = args[3];

    pusher.trigger('get-bookings-' + userId, 'booking-success', {
        "message": '{"id": "' + bookingId + '", "hotelName": "' + hotelName + '", "date": "' + bookingDate + '"}'
    });
}