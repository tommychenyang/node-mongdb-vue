/**
 * Created by chenya3 on 3/30/2017.
 */
'use strict';
var path=require('path');
module.exports = function(app) {
var gundamController=require('../Controller/gundamController');

    // todoList Routes
    app.route('/api/gundam')
        .get(gundamController.list_all_gundams)
        .post(gundamController.create_a_gundam);

};
