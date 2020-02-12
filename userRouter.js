const express = require('express');
const dbModule = require('./db-module');
const sqlite3 = require('sqlite3').verbose(); 

const router = express.Router();


router.get('/list', function(req, res) {
    view = require('./view/userList');
    dbModule.getAllUsers(function(rows) {
        let html = view.userList(rows);
        //console.log(rows);
        res.send(html);
    });
});
router.get('/register', function(req, res){
    res.send('register')
});

router.get('/update/uid/:uid', function(req, res) {
    res.send('update')
});
router.get('/password/uid/:uid', function(req, res) {
    res.send('password')
});
router.get('/delete/uid/:uid', function(req, res) {
   res.send('delete')
});
module.exports = router;