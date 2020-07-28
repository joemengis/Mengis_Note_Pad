const noteData = require('../data/db.json');
const fs = require('fs');
const {v4:uuid4} =require('uuid');



module.exports = function(app) {
    app.get('/api/notes', function (req, res) {
        res.send(noteData);
    }); 

   app.post('/api/notes', function(req, res) {
       console.log(req.body);
       noteData.push(req.body);
       fs.writeFile("../data/db.json", JSON.stringify(noteData), function(err){
            
       });
   })
};


