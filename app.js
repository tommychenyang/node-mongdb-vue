/**
 * Created by chenya3 on 3/28/2017.
 */

var express = require('express');
var bodyParser= require('body-parser');
var mongoose =require('mongoose');
var config=require('./config');
var path= require('path');

var gundam= require('./Server/Model/Gundam');

var app = express();
var router=express.Router();

app.use(bodyParser.json());
var distFolder=path.join(__dirname);
app.use(express.static(distFolder));
app.set('port', (process.env.PORT));
var routes=require('./Server/Routes/apiRoutes');
routes(app);
app.use('/api', router);

app.get('/', function(){
    console.log('firing');

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
