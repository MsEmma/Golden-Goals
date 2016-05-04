var express = require('express'),
    exphbs = require('express-handlebars'),
    app = express(),
    fs = require('fs'),
    handlebars = require('handlebars'),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    myConnection = require('express-myconnection'),

var dbOptions = {
    host: 'localhost',
    user: 'root',
    password: 'nelisa',
    port: 3306,
    database: 'spaza'
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

app.get('/notify', function(req, res) {
    res.render('display', result);

});

app.get('/goals', goals.show);
app.get('/goals/add', goals.showAdd);
app.post('/goals/add', goals.add);
app.get('/goals/edit/:id', goals.get);
app.post('/goals/update/:id', goals.update);
//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/goals/delete/:id', goals.delete);

app.get('/categories', db_categories.show);
app.get('/categories/add', db_categories.showAdd);
app.post('/categories/add', db_categories.add);
app.get('/categories/edit/:id', db_categories.get);
app.post('/categories/update/:id', db_categories.update);
//this should be a post but this is only an illustration of CRUD - not on good practices
app.get('/categories/delete/:id', db_categories.delete);

app.use(errorHandler);

// app.listen(3000, function() {
//   console.log('Opening port 3000!');
// });

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
