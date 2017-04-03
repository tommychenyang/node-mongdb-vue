/**
 * Created by chenya3 on 3/30/2017.
 */
'use strict';


var mongoose = require('mongoose'),
    Gundam = mongoose.model('gundam');

exports.list_all_gundams = function(req, res) {
    Gundam.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};




exports.create_a_gundam = function(req, res) {
    var new_gundam = new Gundam(req.body);
    new_gundam.save(function(err, gundam) {
        if (err)
            res.send(err);
        res.json(gundam);
    });
};


exports.read_a_task = function(req, res) {
    Task.findById(req.params.taskId, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.update_a_task = function(req, res) {
    Task.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


exports.delete_a_task = function(req, res) {


    Task.remove({
        _id: req.params.taskId
    }, function(err, task) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};
