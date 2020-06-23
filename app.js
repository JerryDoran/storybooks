const express = require('express');
const dotenv = require('dotenv');

// load config
dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static('public'));

app.set('views', 'views');

app.set('view engine', 'handlebars');

app.get('route', (req, res) => {});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// MONGO_URI = mongodb+srv://admin-jerry:Carmel101@cluster0-yclv3.mongodb.net/storybook?retryWrites=true&w=majority
const mongoose = require('mongoose');
