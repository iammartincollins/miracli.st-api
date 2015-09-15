var mongoose = require("mongoose");
var schema = require("../schemas/MList.schema");

var MList = mongoose.model('MList', schema);

module.exports = MList;