// Packages
const express = require('express');


// Application Needed Constants
const app = express();
const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Server Started On Port: ${port}`);
});

