/**
 * Created by chenya3 on 3/28/2017.
 */
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(3000, function () {
    console.log('app is listening at port 3000');
});