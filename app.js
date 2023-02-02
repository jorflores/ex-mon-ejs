const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
let dotenv = require("dotenv");
let cookieParser = require("cookie-parser")
let flash =require("connect-flash")
let session = require("express-session")
let path = require("path")

dotenv.config();

const app = express();

// connection to Mongo db
mongoose.connect(process.env.MONGODB_HOST,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('db connected'))
    .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/routeindex');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, "views"));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(session({
    secret: 'myscret',
    resave: false,
    saveUninitialized:false
}))



// routes
app.use('/', indexRoutes);


app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})



module.exports = app
