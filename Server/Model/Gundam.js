/**
 * Created by chenya3 on 3/29/2017.
 */
var mongoose = require('mongoose');
var path=require('path');


var config = require(path.join(process.cwd(), 'config.js'));
process.env.node_env == 'production'
mongoose.connect(process.env.node_env == 'production'? process.env.connectionString : config.dev.connectionString);
console.log(config.dev.ConnectionString);

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
