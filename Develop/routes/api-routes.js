const noteData = require('../data/db.json');
// const fs = require('fs');
// const {v4:uuid4} =require('uuid');



module.exports = function(app) {
    app.get('/api/notes', function (req, res) {
        noteData.forEach((note, index) => {
            note.id = index +1
        });
        res.send(noteData);
        console.log(noteData);
    }); 

   app.post('/api/notes', function(req, res) {
        // console.log(req.body);
        noteData.push(req.body);
        noteData[noteData.length -1].id = noteData.length
        res.send(noteData);
        console.log("note date is:", noteData);
   });
};


