/**
 * Created by chenya3 on 3/29/2017.
 */
var mongoose = require('mongoose');
mongoose.connect(process.env.ConnectionString || 'mongodb://localhost:27017/node-mongo-vue');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
});
    var gundamSchema = mongoose.Schema({
        id: Number,
        name: String,
        code: String,
        releaseDate: Date

    },{
        collection:'gundam'
    });
    var Gundam= mongoose.model('gundam', gundamSchema);
    module.exports =Gundam;
