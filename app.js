/**
 * Created by chenya3 on 3/28/2017.
 */
var express = require('express');
var bodyParser= require('body-parser');
var mongoose =require('mongoose');
var path= require('path');

var gundam= require('./Server/Model/Gundam');
var router=express.Router();

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/Client/'));

app.set('port', (process.env.PORT || 5000));
var routes=require('./Server/Routes/apiRoutes');
var gundammodel = mongoose.model('gundam');
routes(app);




var distFolder=path.resolve(__dirname, '../Client/dist');
var srcFolder=path.resolve(__dirname);
var staticUrl='/lib';
app.use(express.static(srcFolder));
app.use('/api',router);
app.use(staticUrl, express.static(srcFolder));
app.use(staticUrl, function(req, res, next) {
    res.send(404); // If we get here then the request for a static file is invalid
});
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});