// Packages
const express = require('express');
const exphbs = require('express-handlebars');

// Application Needed Constants
const app = express();
const port = 3000 || process.env.PORT;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.listen(port, () => {
  console.log(`Server Started On Port: ${port}`);
});

