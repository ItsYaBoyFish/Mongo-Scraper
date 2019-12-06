// Packages
var test = [
  {Title: 'Test 1', Description: 'Test 1', URL: 'Test 1'},
  {Title: 'Test 2', Description: 'Test 2', URL: 'Test 2'},
  {Title: 'Test 3', Description: 'Test 3', URL: 'Test 2'}
];

// MongoDB Information
const databaseURL = "mongoScraper";
const collections = ["Articles", "Notes"];

const cheerio = require('cheerio');
const axios = require('axios');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
// Application Needed Constants
const app = express();
const port = 3000 || process.env.PORT;

// Setting the setup for express-handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 

app.use(express.static(path.join(__dirname, 'public')));

// Landing page route
app.get('/', function (req, res) {
  var results = [];
  var data;
    axios.get('https://www.nhl.com/').then(function(response) {
      const $ = cheerio.load(response.data);
      
      $("article.showcase_list-item").each((i, el) => {
        var test = $(el).find('.showcase_headline');
        console.log(test);
      })
      
      
    });
    res.render('home', data);
});

app.get('/no', (req, res) => {
  res.render('noResults');
})

app.listen(port, () => {
  console.log(`Server Started On Port: ${port}`);
});



function renderHome(res) {
  res.render('home');
}