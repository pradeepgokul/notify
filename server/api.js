// Module and Dependencies Setup

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 4000;

// DB Connection
// Local Development
const mongoUri = 'mongodb://localhost:27017/notify-dev';
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Database established and Running Successfully');
});



// Middleware

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);


app.listen(port, function() {
  console.log('Server Running on: ', port);
});
