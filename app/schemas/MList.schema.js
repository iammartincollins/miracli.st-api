var mongoose = require("mongoose");
var listItemSchema = require("../schemas/ListItem.schema");
var Schema = mongoose.Schema;

var listSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    list_items: [listItemSchema],
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

//listSchema.methods.dudify = function () {
//    this.name += '-dude';
//
//    return this.name;
//};

module.exports = listSchema;