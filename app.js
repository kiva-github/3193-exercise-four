const express = require('express');
const app = express();
const port = 4000;

// routes
const homePage = require('./routes/index.js');
const aboutPage = require('./routes/about.js');

// route instantiations
app.use('/', homePage)
app.use('/about', aboutPage)
app.use('/images', express.static('public'))

app.listen(port, () => console.log('Running an app on Port 4000'));