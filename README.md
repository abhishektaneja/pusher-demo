# List all bookings app


# To view bookings:

index.html?pubId=<pusher-publisher-id>&userId=<user-id>

# To test event:

npm install fs
npm install pusher
node trigger-event.js <user-id> <booking-id> <hotel-name> <booking-date>

# Config:

copy config.json.sample to config.json and add pusher params
