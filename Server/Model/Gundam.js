/**
 * Created by chenya3 on 3/29/2017.
 */
var mongoose = require('mongoose');
var path=require('path');


var config = require(path.join(process.cwd(), 'config.js'));
mongoose.connect(process.env.NODE_ENV == 'production'? config.prod.connectionString : config.dev.connectionString);

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
