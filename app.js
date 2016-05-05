var express = require('express'),
    exphbs = require('express-handlebars'),
    app = express(),
    fs = require('fs'),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    myConnection = require('express-myconnection'),
    goals = require('./routes/goals');
    notifications = require('./routes/notifications'),
    home = require('./routes/home');

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

app.get('/goals', function(req, res) {
    res.render('goals');
});

app.get('/notifications', function(req, res) {
    res.render('notifications', result);
});

app.get('/', home.show);

app.post('/goals', goals.add);

app.get('/notifications', notifications.show);
app.post('/notifications/update/:id', notifications.update);

app.use(errorHandler);

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
