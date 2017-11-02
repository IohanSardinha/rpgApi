'use strict';
module.exports = function(app) {
  var classesList = require('../controllers/rpgController');
  // todoList Routes
  app.route('/classes')
    .get(classesList.list_all_classes)
    .post(classesList.create_a_class);

  app.route('/classes/:classId')
    .get(classesList.read_a_class)
    .put(classesList.update_a_class)
    .delete(classesList.delete_a_class);
};