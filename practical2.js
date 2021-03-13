var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const API_PORT = 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var cards = {
	card1: {number: "Jack", suite: [" of hearts"]},
	card2: {number: "Ace", suite: [" of clubs"]},
	card3: {number: "Two", suite: [" of spades"]}
};

//get cards
app.get('/cards', function(req,res,next) {
	res.status(200).json(cards); 
});

app.use(express.static('content/modules'));

app.listen(API_PORT, () => {
	console.log(`Listening on localhost:${API_PORT}`)
});


