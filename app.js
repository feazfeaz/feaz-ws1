var express = require("express");
var fs = require("fs");
var app = express();
var server = require('http').createServer(app);
var port = process.env.port || 8000;
server.listen(port)
console.log("server is running");
app.get("/", function (req, res) {
    console.log("index.html");
    // console.log(req.route.);
    fs.readFile("./index.html", (err, data) => {
        res.send(data.toString() + " ")
        res.j
    })
})
app.get("/formatter", function (req, res) {
    console.log("formatter");

    console.log("params ", req.params);
    console.log("query ", req.query);
    console.log("body", req.body);

    fs.readFile("./index.html", (err, data) => {
        var a = data.toString() + " "
        a = a.replace("{content}", '<h2 style="color:green">here is formatter<h2><br>Your result is: ' + (parseInt(req.query.par1) + parseInt(req.query.par2)))
        res.send(a)
    })
})
app.get("/formatter/:par1&:par2", function (req, res) {
    console.log("formatter with 2 par");

    console.log("params ", req.params);
    console.log("query ", req.query);
    console.log("body", req.body);

    fs.readFile("./index.html", (err, data) => {

        var a = data.toString() + " "
        a = a.replace("{content}", '<h2 style="color:green">here is formatter for ' + req.params.par1 + '<h2>')
        res.send(a)
    })
})

app.post("/formatter", function (req, res) {
    console.log("post formatter");
    console.log(req.params);

})

app.get("*", function (req, res) {
    console.log("crack");
    fs.readFile("./index.html", (err, data) => {
        var a = data.toString() + " "
        a = a.replace("{content}", '<h2 style="color:black">Your page is node is not found!<h2>')
        res.send(a)
    })
})