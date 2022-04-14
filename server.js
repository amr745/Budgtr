const express = require ('express');
// const res = require('express/lib/response');
const app = express ();
const PORT = process.env.PORT || 3001;
const Budget = require('./models/budget.js');
const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"))

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
    // console.log(Budget);
    res.redirect('/budgets');
  });

// app.post("/budgets", (req, res) => {
    // res.send("")
// })

app.listen(3000, () => {
    console.log(`Listening on port: ${PORT}`)
});