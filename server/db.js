const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost/tasker'

mongoose.connect(mongoURL, {useMongoClient: true},function(err) {
  if(err) { process.exit(-1); }
  console.log('Connected to MongoDB');
});
