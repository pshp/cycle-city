const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      unique: false,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      unique: false,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 200,
    },
    email: {
      type: String,
      max: 320,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

module.exports = User;
