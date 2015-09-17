function ListController (MList) {
    var _index = function (req, res) {
        MList.find({}, function (err, list) {
            if (err) throw err;

            res.send(list);
        });
    };

    var _getOne = function (req, res) {
        MList.findOne({ _id: req.params.id }, function (err, list) {
            if (err) throw err;
            res.send(list);
        });

    };

    var _create = function (req, res) {
        var newList = new MList({ //TODO: replace with straight req.body
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
    };

    var _update = function (req, res) {
        // TODO: Add updated_at here so it gets added on to data being applied to model
        MList.where({'_id': req.body.id})
            .findOneAndUpdate(req.body.data, function (err, list) {
                if (err) throw err;
                res.send("List \"" + list.name + "\" updated.");
            });
    };

    var _remove = function (req, res) {
        MList.where({'_id': req.params.id})
            .findOneAndRemove(function (err, list) {
                if (err) throw err;
                res.send("List \"" + list.name + "\" deleted.");
            });
    };

    return {
        index: _index,
        create: _create,
        update: _update,
        getOne: _getOne,
        remove: _remove
    }
}

module.exports = ListController;