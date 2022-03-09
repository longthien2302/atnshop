var express = require('express');
var app = express();
var db = require('./models/db');
var bodyparser = require('body-parser');
var session = require('express-session');
var nunjucks = require('nunjucks');
var env = nunjucks.configure('views', {
    autoescape: true,
    express: app
});
var Product = db.Product;


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: '@pidghopudhfopuashfopuaghopahdfoqhfopfuf',
	cookie: {
		maxAge: 600000
	}
}));

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'html');

require('./control/index')(app);
require('./control/product')(app, Product);
require('./control/cart')(app);
require('./control/contactinfo')(app);

app.listen(process.env.PORT || 8081, () => {})

