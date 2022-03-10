const mongoose = require('mongoose');

const startServer = async () => {
  const url = 'mongodb://127.0.0.1:27017/cycle-city';
  mongoose.connect(url);
  console.log('connected to mongoose');
};

module.exports = { startServer };