var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));
var path = require('path');
var PORT = 3000;

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname,'./app/public/home.html'));
});

app.get('/survey', function(req,res){
	res.sendFile(path.join(__dirname,'./app/public/survey.html'));
});

app.listen(PORT,function(){
	console.log('App listening on Port: '+ PORT);
});
