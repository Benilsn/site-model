var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.listen('4567');

app.get('/', (req, res) => {
    return res.render('index');
})