const express = require('express') ;
const app = express() ;
const cors = require('cors')
const router = require('./routes/routes')
const bodyParser = require('body-parser');
const mongoose = require('mongoose') ;

mongoose.connect('mongodb+srv://FoodApp:736157@foodappdata.4zyo8ix.mongodb.net/?retryWrites=true')
mongoose.connection.once('open' ,() => {
    console.log('connected to data base') ;
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())
app.use(router) ;

app.listen(3002 , ()=>{
    console.log('listing on 3002')
})