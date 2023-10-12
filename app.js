const express = require("express");
const db = require("./config/mongoose");
const Contact = require("./models/Contact");
const path = require("path");
const port = 8002;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "assets")));

//HOME PAGE
app.get('/', function (req, res) {
    return res.render('home', {
    });
});

//Addd Record to DB
app.post("/AddContact", async (req, res) => {
    let data = await Contact.create(req.body);
    return res.redirect("back");
});

//View Record From DB
app.get("/View_data", async function (req, res) {
    let data = await Contact.find({});
    return res.render('View_data', {
        ctData: data
    })
})

//RESTAURANT PAGE
app.get('/restaurant', function (req, res) {
    return res.render('restaurant', {
    });
});
//SERVICES PAGE
app.get('/services', function (req, res) {
    return res.render('services', {
    });
});

//Contact Page
app.get('/Contact', function (req, res) {
    return res.render('contact', {
    });
});

app.get('/travel', function (req, res) {
    return res.render('travel', {
    });
});

//AGENCY PAGE
app.get('/agency', function (req, res) {
    return res.render('agency', {
    });
});

//SERVER LISTEN EVENT
app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return false;
    }
})
