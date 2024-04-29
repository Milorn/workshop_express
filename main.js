const express = require('express');

const loginRoutes = require('./routes/login.routes.js');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

app.use(loginRoutes);

app.listen(3000, () => console.log("Server started on: http://localhost:3000"));

