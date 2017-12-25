var mongoose = require('mongoose');

var txschema= new mongoose.Schema({
  txid: String,
  accountnumber: String,
  amount: Number,
  txdate: {type: Date, default: Date.now},
  status: String,

});

module.exports = mongoose.model('tx',txschema);
