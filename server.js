// Packages
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
    res.render('home');
});

app.listen(port, () => {
  console.log(`Server Started On Port: ${port}`);
});

