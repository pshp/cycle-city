const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 5,
      max: 20,
    },
    latitude: {
      type: Number,
      require: true,
    },
    longitude: {
      type: Number,
      require: true,
    },
    title: {
      type: String,
      require: true,
      min: 3,
    },
    description: {
      type: String,
      require: true,
      min: 3,
    },
  },
  { timestamps: true },
);

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
