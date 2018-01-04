/**
 * Created by HAMA on 12/22/2017.
 */

var express= require('express');

var app=express();

app.use(function (req, res, next) {
    if (req.header['x-forwarded-proto'] === 'https'){
        res.redirect('http://'+req.hostname + req.url);
    }
    else{
        
        next();
    }
});

app.use(express.static('public'));

const PORT = process.env.PORT || 3000 ;
app.listen(PORT,function () {
    console.log('Express server is run on port '+PORT);
});
