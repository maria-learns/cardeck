/* YOUR SERVER CODE GOES HERE! */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const API_PORT = 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var modules = { 
	CS5003: {title: "Masters Programming Projects", lecturers: ["Ruth Letham"]},
	CS5002: {title: "Programming Principles and Practice", lecturers: ["Tom Kelsey"]},
	IS5102: {title: "Database Management Systems", lecturers: ["Susmit Sarkar", "Alexander Konovalov"]}
};

//get all the modules
app.get('/modules', function(req,res,next) {
	res.status(200).json(modules); 
});

const max_playersno = 2;

const games = {}

const cards = {}

const players_array = new Array();