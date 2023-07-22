const path = require('path');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();

const sequelize = require('./util/database');

// Database Models
const MovieName = require('./models/movieName');
const ShowTime = require('./models/showTime');

app.use(bodyParser.json());

const movieDataRoute = require('./routes/movieDataRoute');

app.use('/codenicely-assignment', movieDataRoute);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, req.url)); // sends the file from the file path mentioned in the URL to the Client!
});

// One-Many Association
MovieName.hasMany(ShowTime);

sequelize.sync()
 .then(result => {
    console.log('database sync: CHECK');
    app.listen(process.env.PORT);
 })
 .catch(err => console.error(err));