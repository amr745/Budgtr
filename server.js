const express = require ('express');
const res = require('express/lib/response');
const app = express ();
const PORT = process.env.PORT || 3001;
const Budget = require('./models/budget.js');

app.use(express.static("public"))

app.get("/", (req,res) => {
    res.send("Hello World")
})/

app.get("/budgets", (req,res) => {
    res.render('index.ejs', {
        wholeBudget: Budget,
    });
});

// app.get("/budgets", (req,res) => {
//     res.render("index.ejs", {
//         wholeBudget: Budget
//     });
// });

// app.get("/budgets/:index", (req,res) => {
//     res.render("show.ejs")
// });

// app.get("/budgets/new", (req,res) => {
//     res.render("new.ejs")
// });

// app.post("/budgets", (req, res) => {
    // res.send("")
// })

app.listen(3000, () => {
    console.log(`Listening on port: ${PORT}`)
});