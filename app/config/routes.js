var express = require("express"),
    MList = require('../models/MList.js');

var router = express.Router();

module.exports = function () {
    router.route('/lists')
        .get(function (req, res) {
            MList.find({}, function (err, list) {
                if (err) throw err;

                res.send(list);
            });

        })
        .post(function (req, res) {
            var newList = new MList({
                name: req.body.name,
                description: req.body.description,
                list_items: req.body.list_items,
                updated_at: Date.now()
            });

            newList.save(function (err) {
                if (err) throw err;
                res.send("List " + newList.id + " saved.");
                console.log("List successfully saved (" + newList.id + ")");
            });
        })
        .put(function (req, res) {
            MList.where({'_id': req.body.id})
                .findOneAndUpdate(req.body.data, function (err, list) {
                    if (err) throw err;
                    res.send("List \"" + list.name + "\" updated.");
                });
        });

    router.route('/lists/:id')
        .get(function (req, res) {
            MList.findOne(req.params.id, function (err, list) {
                if (err) throw err;
                res.send(list);
            });

        })
        .delete(function (req, res) {
            MList.where({'_id': req.params.id})
                .findOneAndRemove(function (err, list) {
                    if (err) throw err;
                    res.send("List \"" + list.name + "\" deleted.");
                });
        });

    return router;
};