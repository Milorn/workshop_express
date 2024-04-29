const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    if(req.body.email == "hamid@gmail.com" && req.body.password == "1234") {
        res.render("home");
    }
    else {
        res.render("login", {
            error: "Wrong username or password"
        });
    }
});

module.exports = router;