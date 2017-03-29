/**
 * Created by chenya3 on 3/28/2017.
 */
var express = require('express');
var bodyParser= require('body-parser');
var mongoose =require('mongoose');
var gundam= require('./Server/Model/Gundam');
var router=express.Router();

var app = express();
app.use(bodyParser.json())

app.set('port', (process.env.PORT || 5000));
var gundammodel = mongoose.model('gundam');


router.use(function(req,res,next){
    console.log('something is happening');
    next();
});
app.get('/', function (req, res) {
    res.send('Hello World');
});
router.route('/gundam')
    .get(function (req, res) {
        gundammodel.find(function(err,gundams){
            if(err)
                res.send(err);
            res.json(gundams);
        })
    });

app.use('/api',router);
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});