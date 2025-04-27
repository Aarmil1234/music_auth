const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  userName: String,
  password: String,
  mobileNumber: String,
  mobileNumber: String,
});

module.exports = mongoose.model('User', userSchema);
