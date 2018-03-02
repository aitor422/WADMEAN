const mongoose = require('mongoose');

const dbURI = 'mongodb://aitor422:422aitor@ds155218.mlab.com:55218/chorda_aitor'

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
     console.log('Mongoose connected to ', dbURI);
});

mongoose.connection.on('error', function(err) {
     console.log('Mongoose connection error: ', err);
});

mongoose.connection.on('disconnected', function() {
     console.log('Mongoose disconnected');
});

require('./appSchemas')
