var mysql = require('mysql');
var faker = require('faker');
var express = require('express');
var app = express();

require('dotenv').config();

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'landing_page'
});

// home
app.get("/", function(req, res) {
    var q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, function(err, results) {
        if (err) {
        }
        console.log(results);
        var count = results[0].count;
        res.render("home", {data: count});
    });
    console.log("Homepage requested.");
});

// sign up button route
app.post("/register", function(req, res) {
    var newUser = {email: req.body.email};
    var q = "INSERT INTO users SET ?";
    connection.query(q, newUser, function(err, results) {
        if (err) {
            throw err;
        }
        console.log("Email registered.");
        console.log(results);
    });
    res.redirect("/");
});

// route used to generate fake data
app.get("/generate", function(req, res) {
    // bulk inserting 500 randomly generated data
    let data = [];

    for (i = 0; i < 500; i++) {
        data.push([faker.internet.email(), faker.date.past()])
    }

    q = "INSERT INTO users (email, created_at) VALUES ?";

    connection.query(q, [data], function(err, result) {
        if (err) {
            throw err;
        }
        console.log(result);
    });
    res.redirect('/');
});

app.listen(8080, function() {
    console.log("App listening on port 8080.");
});