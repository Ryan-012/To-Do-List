const PORT = 3001;
const express = require('express');
const path = require('path');
const app = express();
const todoRoute = require('./routers/todoRoute.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ToDo');

const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
});

db.once('open', () => {
  console.log('Database loaded!');
});

app.use('/todo', todoRoute);

app.listen(PORT, () => {
  console.log('Server running...');
});
