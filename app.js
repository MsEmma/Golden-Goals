var express = require('express'),
    exphbs = require('express-handlebars'),
    app = express(),
    fs = require('fs'),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    myConnection = require('express-myconnection'),
    goals = require("./routes/goals");
    //members = require('./routes/Members');

var dbOptions = {
    host: 'localhost',
    user: 'golden_girls',
    password: 'goals',
    port: 3306,
    database: 'Goal_it'

};

app.use(express.static('public'));

//configure the port number using and environment number
app.set('port', (process.env.PORT || 3000));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//setup middleware
app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

//var goals = require('./routes/goals'),
// parse application/json
app.use(bodyParser.json());

function errorHandler(err, req, res, next) {
    res.status(500);
    res.render('error', {
        error: err
    });
}

app.get('/', function(req, res) {
    res.render('home');
});

// app.get('/goals', function(req, res) {
//     res.render('goals');
// });
//
// app.get('/notification', function(req, res) {
//     res.render('notification', result);
//
// });
//
// app.get('/goals', goals.show);
// app.get('/goals/add', goals.showAdd);
// app.post('/goals/add', goals.add);
// app.get('/goals/edit/:id', goals.get);
// app.post('/goals/update/:id', goals.update);
// app.get('/goals/delete/:id', goals.delete);
//
// app.get('/notification', notification.show);
// // app.get('/notification/add', notification.showAdd);
// // app.post('/notification/add', notification.add);
// app.get('/notification/edit/:id', notification.get);
// app.post('/notification/update/:id', notification.update);
// // app.get('/notification/delete/:id', notification.delete);

app.use(errorHandler);

// app.listen(3000, function() {
//   console.log('Opening port 3000!');
// });

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
