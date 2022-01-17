const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const request = require('request');

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Static
app.use(express.static('public'));

// Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${5000}`));