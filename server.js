const express = require ('express');
// const res = require('express/lib/response');
let bodyParser = require('body-parser')
const app = express ();
const PORT = process.env.PORT || 3001;
const Budget = require('./models/budget.js');

app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));
// app.use(bodyParser);
// app.use(express.json())
// app.use(bodyParser.json());

app.get("/", (req,res) => {
    res.send("Hello World")
});

app.get("/budgets", (req,res) => {
    res.render('index.ejs', {
        wholeBudget: Budget,
    });
});

app.get("/budgets/new", (req,res) => {
    res.render("new.ejs")
});

app.get("/budgets/:index", (req,res) => {
    res.render("show.ejs", {
        wholeBudget: Budget[req.params.index],
    });
});

app.post('/budgets', (req, res) => {
    Budget.push(req.body);
    res.redirect('/budgets');
  });

app.listen(3000, () => {
    console.log(`Listening on port: ${PORT}`)
});