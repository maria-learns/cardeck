import "models/Player.js";

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
app.get('/modules', function(req, res, next) {
	res.status(200).json(modules);
});

//get all the modules
app.get('/available-games/:player_id', function(req, res, next) {

	var result = games.where(function(element) {
		return element.status == "OPEN" &&
			(element.playerOne.id == req.params.player_id  || element.playerTwo.id == req.params.player_id);
	});

	res.status(200).json(result);
});

const max_playersno = 2;

const games = {}

const cards = {}

const players_array = [new Player(1, "Flavian")];


// TABLE
// player_id | player_name
// ---------------------------------------------------------------------------------
// 1         | Flavian
// 2         | Maria
// 3         | Giovanni
// 4         | Machiavelli
//
//
// // TABLE
// game_id  | game_start_time | game_status | game_deck_cards | player_1 | player_2 | game_won_by
// --------------------------------------------------------------------------------------------------
// 1        | datetime.now()  | OPEN        | {deck_of_cards: { used: [], available: []}} |  1  | 4 | 1
// 2        | datetime.now()  | CLOSED      | {deck_of_cards: { used: [], available: []}} |  2  | 3 | 3
