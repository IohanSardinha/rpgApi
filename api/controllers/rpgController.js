'use strict';


var mongoose = require('mongoose'),
  Class = mongoose.model('Classes');

exports.list_all_classes = function(req, res) {
  Class.find({}, function(err, classs) {
    if (err)
      res.send(err);
    res.json(classs);
  });
};




exports.create_a_class = function(req, res) {
  var new_class = new Class(req.body);
  new_class.save(function(err, classs) {
    if (err)
      res.send(err);
    res.json(classs);
  });
};


exports.read_a_class = function(req, res) {
  Class.findById(req.params.classId, function(err, classs) {
    if (err)
      res.send(err);
    res.json(classs);
  });
};


exports.update_a_class = function(req, res) {
  Class.findOneAndUpdate({_id: req.params.classId}, req.body, {new: true}, function(err, classs) {
    if (err)
      res.send(err);
    res.json(classs);
  });
};


exports.delete_a_class = function(req, res) {
  Class.remove({
    _id: req.params.classId
  }, function(err, classs) {
    if (err)
      res.send(err);
    res.json({ message: 'Class successfully deleted' });
  });
};