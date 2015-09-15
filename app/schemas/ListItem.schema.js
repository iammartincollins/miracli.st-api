var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var listItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: String,
    order_num: { type: Number, min: 0 },
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

module.exports = listItemSchema;