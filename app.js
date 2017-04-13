/**
 * Created by chenya3 on 3/28/2017.
 */

var express = require('express');
var bodyParser= require('body-parser');
var mongoose =require('mongoose');
var config=require('./config');
var path= require('path');

var gundam= require('./Server/Model/Gundam');
var router=express.Router();

var app = express();
app.use(bodyParser.json());
var distFolder=path.join(__dirname);
app.use(express.static(distFolder));
app.set('port', (process.env.PORT || 5000));
var routes=require('./Server/Routes/apiRoutes');
var gundammodel = mongoose.model('gundam');
app.disable('etag');


var srcFolder=path.resolve(__dirname);
var staticUrl='/lib';
app.use('/api',router);

routes(app);
app.use(function(req, res, next) {
  req.headers['if-none-match'] = 'no-match-for-this';
  next();    
});
const PROD = process.env.NODE_ENV === "production";

if (PROD) {
    const PORT=config.prod.port;
    app.listen(app.get('port'));
} else {
    const PORT=config.dev.port-1;
    console.log(PORT);

    app.listen(PORT,'localhost');

}
//app.listen(app.get('port'), function() {
//    console.log('Node app is running on port', app.get('port'));
//});
