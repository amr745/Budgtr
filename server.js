const express = require ('express');
let bodyParser = require('body-parser')
const app = express ();
const PORT = process.env.PORT || 3001;
const Budget = require('./models/budget.js');

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.send("Hello World")
});

app.get("/budgets", (req, res) => {
    let sum = Budget.map(item => item.amount)
    const BankAccount = sum.reduce((a, b) => parseInt(a) + parseInt(b), 0)
    let color = "";
    if (BankAccount <= 0) {
        color = "red"
    } else if (BankAccount >= 1000) {
        color = "green"
    }
    res.render('index.ejs', {
        wholeBudget: Budget,
        totalBankAccount: BankAccount,
        Colors: color,
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