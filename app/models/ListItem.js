var mongoose = require("mongoose");
var schema = require("../schemas/ListItem.schema");

var ListItem = mongoose.model('ListItem', schema);

module.exports = ListItem;