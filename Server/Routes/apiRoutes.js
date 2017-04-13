/**
 * Created by chenya3 on 3/30/2017.
 */
'use strict';
var path=require('path');
var gundamController=require('../Controller/gundamController');

module.exports = function(app) {

    // todoList Routes
    app.route('/api/gundam')
        .get(gundamController.list_all_gundams)
        .post(gundamController.create_a_gundam);
        
    app.route('/api/gundam/:_id')
        .delete(gundamController.delete_a_gundam);
        
};
