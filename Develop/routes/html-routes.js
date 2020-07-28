const path = require('path');

// 'use strict';

// const fs = require('fs');

// let rawdata = fs.readFileSync('db.json');
// let note = JSON.parse(rawdata);
// console.log(note);


module.exports = function(app) {
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/notes.html'));
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });
}
