"use strict";
let express = require('express'),
    http = require('http'),
    fs = require('fs'),
    bodyParser = require('body-parser'),
    app = express();

let postData ='';
app.set('port', 8888);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));



    app.get('/', function(req, res) {
        console.log("Request string: " + req.url);
        postData = req.body;
        res.sendFile(__dirname + "/index.html");
    });
    app.get(/\/stylesheets*|\/script*|\/node_modules*/, function(req, res) {
        console.log("Request string: " + req.url);
        postData = req.body;
        res.sendFile(__dirname + req.url);
    });
app.listen(app.get('port'));
