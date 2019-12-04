// Packages
var test = [
  {Title: 'Test 1', Description: 'Test 1', URL: 'Test 1'},
  {Title: 'Test 2', Description: 'Test 2', URL: 'Test 2'},
  {Title: 'Test 3', Description: 'Test 3', URL: 'Test 2'}
];


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
  var data = {
    data: test
  }
    res.render('home', data);
});

app.get('/no', (req, res) => {
  res.render('noResults');
})

app.listen(port, () => {
  console.log(`Server Started On Port: ${port}`);
});


