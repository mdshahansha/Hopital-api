const express = require('express');
const port = 5000;
const db = require('./config/mongoose');

const passport = require('passport');
const passportJWT = require('./config/passport_jwt_strategy');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

//redirecting routes
app.use('/', require('./routes'));
app.get('/', (req,res)=>{
    res.send('<h1>Puja home render pe deploy done </h1>')
});

app.listen(port, function (err) {
    if (err) { console.log('error'); return; }
    
    console.log(`server is running on ${port}`);
});
