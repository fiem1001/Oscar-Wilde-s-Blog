const express = require('express');
const path = require('path');

var app = express();
app.set('port',3000);
app.set('views',path.join(_dirname,'views'));
app.set('view engine','bug'); 

app.get('/',(req,res) => res.render('home'));

app.listen(app.get('port'),function(){
    console.log('Servidor escuchando %d', app.get('port'));
});