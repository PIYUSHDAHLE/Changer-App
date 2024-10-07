const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

//connect to MongoDB
require('./config/database').connectDB()

app.get('/profile', (req, res) => res.render('profile'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.get('/story', (req, res) => res.render('story'));
app.get('/post', (req, res) => res.render('post'));
app.get('/forget-password', (req, res) => res.render('forget-password'));


app.listen(3000, () => console.log('Server running on port 3000'));


module.exports = app;
