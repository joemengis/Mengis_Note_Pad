const bodyParser = require('body-parser'); 
const express = require('express');
// const uuid = require('uuid/v4');
const path = require('path');


const app = express();
// PORT that Heroku requires
const PORT = process.env.PORT || 8081;

// Body Parser Install
app.use(bodyParser.urlencoded({ extended: false })) 

// Parse application/json
app.use(bodyParser.json()) 

// Include api and html-routes and use express
require('./Develop/routes/api-routes.js')(app);  
require('./Develop/routes/html-routes.js')(app);  
 

// App listener
app.listen(PORT,()=>{
    console.log("App listening on PORT: " + PORT);
   });

