const noteData = require('../data/db.json');
const fs = require('fs');
const {v4:uuid4} =require('uuid');



module.exports = function(app) {
    app.get('/api/notes', function (req, res) {
        res.json(noteData);
    }); 

    app.post('/api/notes', function(req, res) {
        let noteId = uuid();
        let newNote = {
          id: noteId,
          title: req.body.title,
          text: req.body.text
        };
    
        fs.readFile("./data/db.json", "utf8", (err, data) => {
          if (err) throw err;
            const allNotes = JSON.parse(data);
            allNotes.push(newNote);
            
            fs.writeFile("./data/db.json", JSON.stringify(allNotes, null, 2), err => {
                if (err) throw err;
                res.send(db);
                console.log("Successfully created note!")
            });
        });
    });
    
        app.delete("/api/notes/:id", (req, res) => {
            let noteId = req.params.id;
    
            fs.readFile("./data/db.json", "utf8", (err, data) => {
            if (err) throw err;
        
            const allNotes = JSON.parse(data);
            const newAllNotes = allNotes.filter(note => note.id != noteId);
    
            fs.writeFile("./data/db.json", JSON.stringify(newAllNotes, null, 2), err => {
                if (err) throw err;
                res.send(db);
                console.log("Successfully deleted note!")
            });
            });
        });
    };


