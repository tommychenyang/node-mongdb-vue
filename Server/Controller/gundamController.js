/**
 * Created by chenya3 on 3/30/2017.
 */
'use strict';

var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose'),
    Gundam = mongoose.model('gundam');
var apiController={};
apiController.list_all_gundams = function(req, res) {
    Gundam.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

apiController.create_a_gundam = function(req, res) {
    var new_gundam = new Gundam(req.body);
    new_gundam.save(function(err, gundam) {
        if (err)
            res.send(err);
        res.json(gundam);
    });
};


apiController.read_a_task = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


apiController.update_a_task = function(req, res) {
    Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


apiController.delete_a_gundam = function(req, res) {

    Gundam.remove({
        _id: req.params._id
    }, function(err, task) {
        if (err)
            res.send(err);

        res.send('deleted');
    });
};
module.exports = apiController;
