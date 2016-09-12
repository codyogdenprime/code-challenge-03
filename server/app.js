/* jshint esversion: 6 */
(function() {
    'use strict';
})(); // Use strict JS

// Load Express
const express = require('express');

// Start express
const app = express();

// Load BodyParser
const bodyParser = require('body-parser');
// Tell the app to let bodyParser get data that is sent to server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Any files in these folders will be visible at top level
app.use(express.static('node_modules/jquery/dist'));
app.use(express.static('node_modules/normalize.css'));
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('listening on 3000');
});

// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs"
  }
];

app.route( '/')
    .get( ( req, res ) => {

      res.render( 'public/index.html' );

    });

app.route( '/jokes')
    .get( ( req, res ) => {

      res.status(200).send( jokes );

    })
    .post( ( req, res ) => {

      jokes.push( req.body );
      res.status(200).send( jokes );

    } );
