const bodyParser = require('body-parser'); 
const express = require('express');
// const uuid = require('uuid/v4');
const path = require('path');


const app = express();
// PORT that Heroku requires
const PORT = process.env.PORT || 8081;

// Body Parser Install
app.use(express.urlencoded({ extended: true })) 

// Parse application/json
app.use(express.json()) 

// Include api and html-routes and use express
require('./Develop/routes/api-routes')(app);  
require('./Develop/routes/html-routes')(app);  
 

// App listener
app.listen(PORT,()=>{
    console.log("App listening on PORT: " + PORT);
   });

