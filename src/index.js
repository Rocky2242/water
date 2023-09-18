var express = require('express');
var path = require('path');
var hbs = require('hbs');
var app = express();
var port = "5000";
var templatepath = path.join(__dirname,"../templates/views");
var partialspath = path.join(__dirname,"../templates/partials");
//Template Engine
app.set("view engine","hbs");
//views folder Changed to templates
app.set("views",templatepath);
//Register partials path for its usage
hbs.registerPartials(partialspath);
//Request & Response
app.get('/', (req, res) => {
res.render("index");
});
app.get('/booking', (req, res) => {
    res.render("booking");
    });
//404 Page Not Found
app.get('*', function (req, res) {
    res.render("404");
});

//Listen on Port
app.listen(port,()=>{
    console.log(`listning on ${port}`);
    
});