// Create web server
// Load the 'express' module
const express = require('express');
// Create a new instance of express
const app = express();
// Load the 'hbs' module
const hbs = require('hbs');
// Load the 'path' module
const path = require('path');
// Load the 'data' module
const data = require('./data/data.json');
// Set the view engine
app.set('view engine', 'hbs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));
// Set the static files directory
app.use(express.static(path.join(__dirname, 'public')));
// Set the router
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    people: data.people
  });
});
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});
app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact'
  });
});
// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});