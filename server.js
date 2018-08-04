const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    port = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


//TO USE ANGULAR APP
app.use(express.static( __dirname + '/my-angular-app/dist' ));
//Tell server where views are and templating engine I'm using
//CHANGED this to 'client/views'
app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(port, function(){
    console.log("SHITS ON ", port);
});
