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
var distFolder=path.join(__dirname);
app.use(express.static(distFolder));
app.set('port', (process.env.PORT || 5000));
var routes=require('./Server/Routes/apiRoutes');
var gundammodel = mongoose.model('gundam');






var srcFolder=path.resolve(__dirname);
var staticUrl='/lib';
app.use('/api',router);

routes(app);
app.all('/*', function(req, res) {
    // Just send the index.html for other files to support HTML5Mode
    return  res.sendFile('index.html', { root:  path.resolve(__dirname, 'dist') });
});
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});