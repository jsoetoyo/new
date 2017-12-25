var express = require('express'),
    router = express.Router();
var tx = require("../models/tx");
var balance = require("../models/balance");

router.post('/', function (req, res, next) {
  console.log(req.body)
    tx.create(req.body, function (err, data) {
      var condition = { "accountnumber": req.body.accountnumber }
      balance.find(condition, function (err, data) {
          if (err && (!data)){
            balance.create({
              accountnumber: req.body.accountnumber,
              balance: req.body.amount

            }, function (err,bal){
              res.json({ text: "Create new balance", params: req.body, data: bal });
            })
            return;
          }
          else {
            data.balance= data.balance + req.body.amount;
            data.save();
            res.json({ text: "Update balance", params: req.body, data: data });
          }
      })
    })
})
module.exports = router;
