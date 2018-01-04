/**
 * Created by HAMA on 12/22/2017.
 */

var express= require('express');

var app=express();

app.use(express.static('public'));


app.listen(3000,function () {
    console.log('Express server is run on port 3000');
});
