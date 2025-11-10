require('dotenv').config()

const express = require('express');
const app = express();

var indexRouter =require('./routes/index')
var usersRouter =require('./routes/users')
// const {connectDB} = require('./config/database')

app.set('view engine', 'ejs');
app.use(express.static('public'));

//connect to MongoDB
// connectDB()

app.get('/profile', (req, res) => res.render('profile'));
app.get('/login', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));
app.get('/home', (req, res) => res.render('home'));
app.get('/edit', (req, res) => res.render('edit'));
app.get('/search', (req, res) => res.render('search'));
app.get('/upload', (req, res) => res.render('upload'));
app.get('/post', (req, res) => res.render('post'));
app.get('/forget-password', (req, res) => res.render('forget-password'));


app.listen(3000, () => console.log('Server running on port 3000'));


module.exports = app;
// this is main file


