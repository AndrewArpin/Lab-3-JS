const express = require('express');
const app = express();

const path = require('path');

//Set the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//The routes
const routes = require('./routes.js');
app.use('/', routes);

//Start the server
app.listen(process.env.PORT || 3000, port => console.log(`Listening on port ${port}`));