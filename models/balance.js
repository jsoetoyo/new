var mongoose = require('mongoose');

var balanceschema= new mongoose.Schema({
  accountnumber: String,
  balance: Number,
});

module.exports = mongoose.model('balance',balanceschema);
