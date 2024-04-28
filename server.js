const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./constants');

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true})); 

app.use(cors({origin: "*"}));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/", (req, res) => {
    res.redirect("http://localhost:5000/home/venkadesh");
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);

    if (data[username] === password) {
        res.redirect("localhost:5000/home/venkadesh");
    } 

    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server is running in PORT 3000");
}) 
