const mongoose = require('mongoose');

const uri = "mongodb+srv://sdev255:password255@cluster0.laecr6g.mongodb.net/?appName=Cluster0";


mongoose.connection.on('connected', () => {
  console.log('Mongoose connected');
});

mongoose.connection.on('error', (err) => {
  console.error(' Mongoose connection error:', err);
});

mongoose.connect(uri);

module.exports = mongoose;