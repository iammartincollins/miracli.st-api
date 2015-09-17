var MList = require('../models/MList.js'),
    listCtrl = require('../controllers/list-controller')(MList),
    router = require("express").Router();

module.exports = function () {
    router.route('/lists')
        .get(listCtrl.index)
        .post(listCtrl.create)
        .put(listCtrl.update);

    router.route('/lists/:id')
        .get(listCtrl.getOne)
        .delete(listCtrl.remove);

    return router;
};